import React from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ListItemProps } from '../components/listItem';
import ListItem from '../components/listItem';
import { makeStyles } from '@fluentui/react-components';
import Head from 'next/head';

const useStyles = makeStyles({
    main: {
        padding: '1rem',
    },
    title: {
        margin: '0',
    },
    content: {
        marginBlockStart: '5rem',
        marginInlineStart: '1rem',
        width: 'fit-content',
    },
    techStackList: {},
});

const Home: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { t } = useTranslation();

    const techStack = React.useMemo<ListItemProps[]>(
        () => [
            {
                name: 'React',
                description: 'JavaScript Library to create User Interface.',
                href: 'https://react.dev/',
                icon: '/assets/react.png',
            },
            {
                name: 'TypeScript',
                description:
                    'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
                href: 'https://www.typescriptlang.org/',
                icon: '/assets/ts.png',
            },
            {
                name: 'Next.js',
                description:
                    'React Framework with built-in Server-Side-Rendering (SSR), and routing system that enable code-splitting ',
                href: 'https://nextjs.org/',
                icon: '/assets/next-logo.png',
            },
            {
                name: 'React-hook-form',
                description: 'Performant, flexible and extensible forms with easy-to-use validation.',
                href: 'https://react-hook-form.com/',
                icon: '/assets/react-hook-form.png',
            },
            {
                name: 'Zod',
                description: 'Schema declaration and validation library.',
                href: 'https://zod.dev/',
                icon: '/assets/zod.png',
            },
            {
                name: 'Playwright',
                description: 'User end-to-end testing for modern web apps.',
                href: 'https://playwright.dev/',
                icon: '/assets/playwright.png',
            },
            {
                name: 'React-testing-library',
                description: 'a very lightweight solution for unit testing React components.',
                href: 'https://testing-library.com/docs/react-testing-library/intro/',
                icon: '/assets/react-testing-library.png',
            },
        ],
        []
    );

    const { main, title, content, techStackList } = useStyles();

    return (
        <>
            <Head>
                <title>{t('UXPortal')}</title>
                <meta name='description' content={t('UXPortalPageDescription') ?? undefined} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={main}>
                <h1 className={title}>{t('UXPortal')}</h1>
                <p>{t('Welcome')}</p>
                <div className={content}>
                    <h2>{t('TechStackTitle')}</h2>
                    <span>{t('TechStackDescription')}</span>
                    <div className={techStackList}>
                        {techStack.map((item, i) => (
                            <ListItem key={i} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en')),
        },
    };
};

export default Home;
