import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/GlobalStyle';
import MobileLayout from '@/styles/MobileLayout';
import { theme } from '@/styles/MuiTheme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MobileLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </MobileLayout>
      </ThemeProvider>
    </>
  );
}
