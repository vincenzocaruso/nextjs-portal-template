import React from 'react';
import Image from 'next/image';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
    wrapper: {
        overflowX: 'auto',
    },
    textEllipsis: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
});

export default function ListItem({ href, name, description, icon }: ListItemProps) {
    const { textEllipsis, wrapper } = useStyles();

    return (
        <a href={href} title={name} target='_blank' rel='noreferrer'>
            <div className={wrapper}>
                <span>{icon && <Image src={icon} alt={`${name}-logo`} width={64} height={64} />}</span>
                <div>
                    <p className={textEllipsis}>{name}</p>
                    <p className={textEllipsis}>{description}</p>
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
