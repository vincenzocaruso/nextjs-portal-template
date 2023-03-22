/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

// @ts-ignore - Provide the path to load next.config.js and .env files
const createJestConfig = nextJest({ dir: './' });

/**
 * Add any custom config to be passed to Jest - https://jestjs.io/docs/en/configuration.html
 * @type {import('jest').Config}
 */
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        // Handle module aliases (this will be automatically configured for you soon)
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    testPathIgnorePatterns: ['/tests/'], // these are e2e tests, ignore them
    collectCoverage: true,
    coverageThreshold: {
        global: {
            lines: 80,
            statements: 80,
            branches: 80,
            functions: 80,
        },
    },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
