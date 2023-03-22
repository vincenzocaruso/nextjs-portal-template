import React from 'react';
import styles from './index.module.scss';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import classNames from 'classnames/bind';
import type { ListItemProps } from '../components/listItem';
import ListItem from '../components/listItem';

const cx = classNames.bind(styles);

const Home: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { t } = useTranslation();

    const techStack = React.useMemo<ListItemProps[]>(() => [
        {
            name: 'React',
            description: 'JavaScript Library to create User Interface.',
            href: 'https://react.dev/',
            icon: '/assets/react.png'
        },
        {
            name: 'TypeScript',
            description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
            href: 'https://www.typescriptlang.org/',
            icon: '/assets/ts.png'
        },
        {
            name: 'Next.js',
            description: 'React Framework with built-in Server-Side-Rendering (SSR), and routing system that enable code-splitting ',
            href: 'https://nextjs.org/',
            icon: '/assets/next-logo.png'
        },
        {
            name: 'tRPC',
            description: 'tRPC is a remote procedure call framework that provides a type-safe environment to build APIs for TypeScript and JavaScript-based projects without relying on schema definitions or libraries for code generation.',
            href: 'https://trpc.io/',
            icon: '/assets/trpc.png'
        },
        {
            name: 'React-hook-form',
            description: 'Performant, flexible and extensible forms with easy-to-use validation.',
            href: 'https://react-hook-form.com/',
            icon: '/assets/react-hook-form.png'
        },
        {
            name: 'Zod',
            description: 'Schema declaration and validation library.',
            href: 'https://zod.dev/',
            icon: '/assets/zod.png'
        },
        {
            name: 'Playwright',
            description: 'User end-to-end testing for modern web apps.',
            href: 'https://playwright.dev/',
            icon: '/assets/playwright.png'
        },
        {
            name: 'React-testing-library',
            description: 'a very lightweight solution for unit testing React components.',
            href: 'https://testing-library.com/docs/react-testing-library/intro/',
            icon: '/assets/react-testing-library.png'
        }
    ], []);

    return (
        <>
            <Head>
                <title>{t('UXPortal')}</title>
                <meta name='description' content={t('UXPortalPageDescription') ?? undefined} />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className={cx('main')}>
                <h1 className={cx('title')}>{t('UXPortal')}</h1>
                <p>{t('Welcome')}</p>
                <div className={cx('content')}>
                    <h2>{t('TechStackTitle')}</h2>
                    <span>{t('TechStackDescription')}</span>
                    <div className={cx('tech-stack-list')}>
                        {techStack.map((item, i) => <ListItem key={i} {...item} />)}
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
