import styles from './shell.module.scss';
import classnames from 'classnames/bind';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import type { FluentIconsProps } from '@fluentui/react-icons';
import { NavigationRegular } from '@fluentui/react-icons';
import ActiveLink from '../activeLink';
import { Text } from '@fluentui/react-components';

const cx = classnames.bind(styles);

export default function Navigation({ children }: PropsWithChildren) {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const onClick = () => {
        setIsCollapsed((prev) => !prev);
    };

    const ariaLabel = isCollapsed ? t('Navigation.Expand') : t('Navigation.Collapse');

    return (
        <nav
            className={cx('nav', { collapsed: isCollapsed })}
            data-testid={`nav-${isCollapsed ? 'collapsed' : 'expanded'}`}
        >
            <button aria-label={ariaLabel} className={cx('nav-item')} onClick={onClick} data-testid='nav-toggle'>
                <NavigationRegular className={cx('icon')} />
            </button>
            {children}
        </nav>
    );
}

interface NavItemProps {
    icon: React.FC<FluentIconsProps>;
    href: string;
    text: string;
}
export function NavItem({ icon, href, text }: NavItemProps) {
    const Icon = icon;

    return (
        <ActiveLink className={cx('nav-item')} activeClassName={cx('active')} href={href}>
            <Icon className={cx('icon')} />
            <Text className={cx('text')}>{text}</Text>
        </ActiveLink>
    );
}
