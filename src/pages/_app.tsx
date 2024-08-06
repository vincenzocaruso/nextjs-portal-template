import 'sanitize.css';

import type { AppProps, AppType } from 'next/app';
import type { GriffelRenderer } from '@fluentui/react-components';
import {
    createDOMRenderer,
    FluentProvider,
    SSRProvider,
    RendererProvider,
    webLightTheme,
} from '@fluentui/react-components';

import { appWithTranslation } from 'next-i18next';
import Shell from '@/components/shell/shell';

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

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
export default appWithTranslation(MyApp);
