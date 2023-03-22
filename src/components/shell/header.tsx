import styles from './shell.module.scss';
import classnames from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import type { ReactNode } from 'react';

const cx = classnames.bind(styles);

interface HeaderProps {
    children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    const { t } = useTranslation();

    return (
        <header className={cx('header')} data-testid='shell-header'>
            <div className={cx('title-container')}>
                <span className={cx('title')} data-testid='header-title'>
                    {t('UXPortal')}
                </span>
            </div>

            <div className={cx('header-items')}>{children}</div>
        </header>
    );
}

interface HeaderItemProps {
    children: ReactNode;
}
export function HeaderItem({ children }: HeaderItemProps) {
    return <div className={cx('header-item')}>{children}</div>;
}
