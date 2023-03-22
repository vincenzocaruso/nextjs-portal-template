import 'sanitize.css';
import '@/styles/globals.scss';
import '@/styles/colors.scss';

import type { AppProps, AppType } from 'next/app';
import type { GriffelRenderer } from '@fluentui/react-components';
import {
    createDOMRenderer,
    FluentProvider,
    SSRProvider,
    RendererProvider,
    webLightTheme,
} from '@fluentui/react-components';

import { api } from '@/utils/api';
import { appWithTranslation } from 'next-i18next';
import Shell from '@/components/shell/shell';

import { initializeIcons } from '@fluentui/react';

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

initializeIcons();

const MyApp: AppType = ({ Component, pageProps, renderer }: EnhancedAppProps) => {
    return (
        <RendererProvider renderer={renderer || createDOMRenderer()}>
            <SSRProvider>
                <FluentProvider theme={webLightTheme}>
                    <Shell>
                        <Component {...pageProps} />
                    </Shell>
                </FluentProvider>
            </SSRProvider>
        </RendererProvider>
    );
};

export default api.withTRPC(appWithTranslation(MyApp));
