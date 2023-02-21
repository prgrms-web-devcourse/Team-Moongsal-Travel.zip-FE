import type { AppProps } from 'next/app';

import MobileLayout from '@/styles/MobileLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MobileLayout>
        <Component {...pageProps} />
      </MobileLayout>
    </>
  );
}
