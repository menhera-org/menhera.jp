import './_app.css';

import type { AppProps } from 'next/app';
import TopBar from '@/components/top-bar';
import PageFooter from '@/components/page-footer';
import Head from 'next/head';
 
export default function MyApp({ Component, pageProps }: AppProps) {
    return <div id="app">
        <Head>
            <link rel="icon" href="/assets/icon-full.svg" />
        </Head>
        <TopBar />
        <div id="content">
            <Component {...pageProps} />
        </div>
        <PageFooter />
    </div>
}
