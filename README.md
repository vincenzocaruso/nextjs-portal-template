# UX Portal

## Quick start
`npx create-next-app my-test --example "https://github.com/vincenzocaruso/nextjs-portal-template"`

## Project structure

`portal`

- `docker` - Docker configuration files
- `public` - `NextJS` directory for serving static files, such as images, JSON or anything else that isn't dynamic: <https://nextjs.org/docs/basic-features/static-file-serving>
  - `locales` - Contains JSON files with localized strings for the application. See [Localization](#localization) below
- `scripts` - Utility scripts specific to the `portal`. These could be for builds or anything else that could help with developing the `portal`
- `src` - All "application" files live here
  - `components` - Any React components that will be used within a page
  - `pages` - `NextJS` directory defining the routing structure for the application. Every file in this directory should export one React component that renders components from the `components` directory. The directory structure is mapped 1:1 with the URL the page will be rendered at: <https://nextjs.org/docs/basic-features/pages>
    - `api` - `NextJS` directory defining API routes that form the backend for the `portal`. Follows the same conventions as the `pages` directory, with all routes being available with the `/api` prefix: <https://nextjs.org/docs/api-routes/introduction>
  - `server` - All backend related code that isn't an API route. Has a similar relationship to `/pages/api` as `/components` has to `/pages/*`
    - `api`
      - `routers` - Contains files that export `tRPC` routers. These should be split logically based on the entity that they're acting upon: <https://trpc.io/docs/router>
  - `styles` - Stylesheets that are more global or utility in nature and aren't specific to any one page or component.
  - `utils` - Any general utility functions that can be used throughout the application

## Local Development

### Prerequisites

- Node.js > 16
- Make sure that you have access to the Azure Artifacts feed

## Testing

### End-to-end tests (E2Es)

#### Writing E2Es

1. Create a test file in the `src/tests` directory
2. Add at least one `test` fixture to the file
3. Run the test to verify functionality ([see below](#running-tests))
4. If the test is failed, troubleshoot either with the trace file, logs, or debug with the [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

#### Running E2Es

### Localization

#### File structure

All localization files should be placed in the `public/locales/en` directory. The files should be split logically based on their usage in different routes or pages. For example, if we have two pages in our app: `/foo` and `/bar`, and there are strings that are only use in one or the other, we should have two separate translation files: `/public/locales/en/foo.json` and `/public/locales/en/bar.json`.

This separation enables us to only load the strings we need for each individual page/experience.

Any strings that are used throughout the application should be placed in `/public/locales/en/common.json` which is loaded on every page.

#### Usage

Below is a basic page that loads translations from a namespace `foo` and uses strings from that namespace as well as the default `common`

`public/locales/en/common.json`

```json
{
    "AppName": "My Great Application™️"
}
```

`public/locales/en/foo.json`

```json
{
    "PageContent": "This is my string that lives in the \"foo\" namespace"
}
```

`src/pages/foo/index.tsx`

```typescript
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { type NextPage } from 'next';

// useTranslation must be imported from next-i18next in order to properly use translations loaded on the server
// Our ESLint rules prevent importing this function directly from react-i18next
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { t } = useTranslation();

    return (
        <>
            {/* Use a string from common.json which is in the default namespace so no prefix is required */}
            <h1>{t('AppName')}</h1>

            {/* Use a string from the "foo" namespace, with the namespace prefixed and followed by a colon */}
            <p>{t('foo:PageContent')}</p>
        </>
    );
};

// Every page file should to have "getServersideProps" defined like below, with all the namespaces
// that are needed when the page first loads added to the array passed to "serverSideTranslations"
export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    return {
        props: {
            // Call the "serverSideTranslations" from "next-i18next" so the page has all its strings when it loads
            // Pass all the namespaces (json files) we want to load on this page as an array.
            // If we're just using "common", we can omit this
                                                                ⬇️
            ...(await serverSideTranslations(locale ?? 'en', ['foo'])),
        },
    };
};

export default Home;
```
