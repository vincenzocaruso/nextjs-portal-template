import React from 'react';
import styles from './listItem.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(styles);

export default function ListItem({ href, name, description, icon }: ListItemProps) {
    return (
        <a href={href} title={name} target='_blank' rel="noreferrer">
            <div className={cx('container')}>
                <span className={cx('icon')}>
                    {icon && <Image src={icon} alt={`${name}-logo`} width={64} height={64} />}
                </span>
                <div className={cx('text-container')}>
                    <p className={cx('name')}>{name}</p>
                    <p className={cx('description')}>{description}</p>
                </div>
            </div>
        </a>
    );
}

export interface ListItemProps {
    name: string;
    href: string;
    description: string;
    icon: string;
}