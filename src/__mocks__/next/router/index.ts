import { jest } from '@jest/globals';

import type { NextRouter } from 'next/router';

const useRouter = () =>
    ({
        asPath: '/jest-router',
        isReady: true,
        route: 'jest',
        pathname: 'jest',
        basePath: 'https://localhost',
        isLocaleDomain: true,
        push: jest.fn(),
    } as Partial<NextRouter>);

export { useRouter };
