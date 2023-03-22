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
            name: 'Next.js',
            description: 'React Framework',
            href: 'https://nextjs.org/',
            icon: '/assets/next-logo.png'
        },
        {
            name: 'Next.js',
            description: 'React Framework',
            href: 'https://nextjs.org/',
            icon: ''
        },
        {
            name: 'Next.js',
            description: 'React Framework',
            href: 'https://nextjs.org/',
            icon: ''
        },
        {
            name: 'Next.js',
            description: 'React Framework',
            href: 'https://nextjs.org/',
            icon: ''
        },
        {
            name: 'Next.js',
            description: 'React Framework',
            href: 'https://nextjs.org/',
            icon: ''
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
