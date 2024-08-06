import { makeStyles } from '@fluentui/react-components';
import { useTranslation } from 'next-i18next';
import type { ReactNode } from 'react';

const useStyles = makeStyles({
    header: {
        flexShrink: 0,
        flexGrow: 0,
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        backgroundColor: '#3c3c41',
    },
    titleContainer: {
        display: 'flex',
        flexGrow: 1,
        height: '100%',
        overflow: 'hidden',
    },
    title: {
        flexGrow: 1,
        padding: '0 1rem',
        fontSize: '1rem',
        lineHeight: '1rem',
        fontWeight: 700,
        alignSelf: 'center',
    },
    headerItems: {
        flexGrow: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        minHeight: '100%',
    },
    headerItem: {
        display: 'flex',
        alignItems: 'center',
    },
});

interface HeaderProps {
    children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    const { t } = useTranslation();
    const { header, titleContainer, title, headerItems } = useStyles();

    return (
        <header className={header} data-testid='shell-header'>
            <div className={titleContainer}>
                <span className={title} data-testid='header-title'>
                    {t('UXPortal')}
                </span>
            </div>

            <div className={headerItems}>{children}</div>
        </header>
    );
}

interface HeaderItemProps {
    children: ReactNode;
}
export function HeaderItem({ children }: HeaderItemProps) {
    const { headerItem } = useStyles();
    return <div className={headerItem}>{children}</div>;
}
