import type { ReactNode } from 'react';
import Header from './header';
import Navigation, { NavItem } from './navigation';
import classnames from 'classnames/bind';

import styles from './shell.module.scss';
import { HomeRegular } from '@fluentui/react-icons';
const cx = classnames.bind(styles);

interface Props {
    children: ReactNode;
}

export default function Shell({ children }: Props) {
    return (
        <div className={cx('shell')} data-testid='shell'>
            <Header></Header>
            <div className={cx('nav-workspace-container')}>
                <Navigation>
                    <NavItem href='/' icon={HomeRegular} text={'Home'} />
                </Navigation>
                <main className={cx('shell-content-container')}>{children}</main>
            </div>
        </div>
    );
}
