import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { GNB } from '@/components/GNB';
import { Header } from '@/components/Header';
import { AutoComplete } from '@/components/SearchModal';
import GlobalStyle from '@/styles/GlobalStyle';
import MobileLayout from '@/styles/MobileLayout';
import { theme } from '@/styles/MuiTheme';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 300000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <MobileLayout>
            <GlobalStyle />
            <AutoComplete>
              <Header />
            </AutoComplete>
            <Component {...pageProps} />
            <GNB />
          </MobileLayout>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
