import type { ReactNode } from 'react';
import Header from './header';
import Navigation, { NavItem } from './navigation';
import { HomeRegular } from '@fluentui/react-icons';
import { makeStyles } from '@fluentui/react-components';

interface Props {
    children: ReactNode;
}

const useStyles = makeStyles({
    shell: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
    },
    navWorkspaceContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    shellContentContainer: {
        height: '100%',
        width: '100%',
    },
});

export default function Shell({ children }: Props) {
    const { shell, navWorkspaceContainer, shellContentContainer } = useStyles();

    return (
        <div className={shell} data-testid='shell'>
            <Header></Header>
            <div className={navWorkspaceContainer}>
                <Navigation>
                    <NavItem href='/' icon={HomeRegular} text={'Home'} />
                </Navigation>
                <main className={shellContentContainer}>{children}</main>
            </div>
        </div>
    );
}
