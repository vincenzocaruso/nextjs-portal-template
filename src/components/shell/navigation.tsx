import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import type { FluentIconsProps } from '@fluentui/react-icons';
import { NavigationRegular } from '@fluentui/react-icons';
import ActiveLink from '../activeLink';
import { makeStyles, mergeClasses, Text } from '@fluentui/react-components';

const useStyles = makeStyles({
    navWorkspaceContainer: {},
    nav: {
        backgroundColor: 'white',
        width: '12.5rem',
        boxSizing: 'content-box',
        flexShrink: 0,
        flexGrow: 0,
        transitionProperty: 'width, left, box-shadow',
        transitionDuration: '0.2s',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: 'inline 1px solid #dadada',
    },
    collapsed: {
        width: '3rem',
    },
    navItem: {
        height: '2.75rem',
        border: 'none',
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        color: '#323130',
        backgroundColor: 'transparent',
        padding: '0 1rem',
        position: 'relative',
        ':hover': {
            backgroundColor: '#dadada',
            color: '#323130',
        },
    },
    textClass: {
        '::before': {
            content: '',
            backgroundColor: '#60aaff',
            position: 'absolute',
            top: '10px',
            left: '4px',
            width: '0.25rem',
            height: '1.75rem',
            borderRadius: '1rem',
        },
    },
    active: {
        fontWeight: 'bold',
    },
    iconClass: {
        marginInlineEnd: '1.25rem',
        minWidth: '1.25rem',
        minHeight: '1.25rem',
    },
});

export default function Navigation({ children }: PropsWithChildren) {
    const { nav, collapsed, navItem, iconClass } = useStyles();

    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const onClick = () => {
        setIsCollapsed((prev) => !prev);
    };

    const ariaLabel = isCollapsed ? t('Navigation.Expand') : t('Navigation.Collapse');

    return (
        <nav
            className={mergeClasses(isCollapsed && collapsed, nav)}
            data-testid={`nav-${isCollapsed ? 'collapsed' : 'expanded'}`}
        >
            <button aria-label={ariaLabel} className={navItem} onClick={onClick} data-testid='nav-toggle'>
                <NavigationRegular className={iconClass} />
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
    const { textClass, active, navItem, iconClass } = useStyles();

    const Icon = icon;

    return (
        <ActiveLink className={navItem} activeClassName={active} href={href}>
            <Icon className={iconClass} />
            <Text className={textClass}>{text}</Text>
        </ActiveLink>
    );
}
