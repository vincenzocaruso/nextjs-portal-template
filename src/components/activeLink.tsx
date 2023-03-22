import { useRouter } from 'next/router';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import React, { useState, useEffect } from 'react';

type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName: string
};

/**
 * Applies `activeClassName` to the NextJS `Link` component when the current route matches the given `href`.
 * Taken from the offical example here: https://github.com/vercel/next.js/blob/4487abd73f45fc08edcc99d7ddfcc75428325d53/examples/active-class-name/components/ActiveLink.tsx
 */
const ActiveLink = ({
    children,
    activeClassName,
    className,
    ...props
}: PropsWithChildren<ActiveLinkProps>) => {
    const { asPath, isReady } = useRouter();
    const [computedClassName, setComputedClassName] = useState(className);

    useEffect(() => {
        // Check if the router fields are updated client-side
        if (isReady) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL(
                (props.as || props.href) as string,
                location.href
            ).pathname;

            // Using URL().pathname to get rid of query and hash
            const activePathname = new URL(asPath, location.href).pathname;

            let newClassName = className;
            if (
                (linkPathname === '/' && activePathname === '/') ||
                (linkPathname !== '/' && activePathname.startsWith(linkPathname))
            ) {
                newClassName = `${className ?? ''} ${activeClassName}`.trim();
            }

            if (newClassName !== computedClassName) {
                setComputedClassName(newClassName);
            }
        }
    }, [
        asPath,
        isReady,
        props.as,
        props.href,
        activeClassName,
        className,
        computedClassName,
    ]);

    return (
        <Link className={computedClassName} {...props}>
            {children}
        </Link>
    );
};

export default ActiveLink;