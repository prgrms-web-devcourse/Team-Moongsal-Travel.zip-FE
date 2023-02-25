import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import { Header } from '@/components/Header';
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
        <MobileLayout>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </MobileLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
