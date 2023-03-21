import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { SigninLeadModal } from '@/components/common';
import { AutoComplete } from '@/components/common/AutoComplete';
import { GNB } from '@/components/common/GNB';
import { Header } from '@/components/common/Header';
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
            <SigninLeadModal />
          </MobileLayout>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
