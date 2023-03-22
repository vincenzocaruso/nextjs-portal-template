// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./src/env.mjs'));
import i18nConfig from './next-i18next.config.js';

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    /**
     * If you have the "experimental: { appDir: true }" setting enabled, then you
     * must comment the below `i18n` config out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    i18n: i18nConfig.i18n,
    // Allows for more optimized production image size: https://nextjs.org/docs/advanced-features/output-file-tracing
    output: 'standalone',
};
export default config;
