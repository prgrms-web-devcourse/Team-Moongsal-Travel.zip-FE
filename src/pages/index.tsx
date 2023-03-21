import Head from 'next/head';

import { PersonalFeedList, PopularFeedList } from '@/components/maintemp';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>travel.zip</title>
        <meta name='description' content='내가 가진 여행 기억의 모음집' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://travel-zip.vercel.app/' />
        <meta property='og:title' content='travel.zip' />
        <meta property='og:description' content='내가 가진 여행 기억의 모음집' />
        <meta property='og:site_name' content='travel.zip' />
        <meta property='og:image' content='/ogImage.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:locale' content='ko' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PopularFeedList />
        <PersonalFeedList />
      </main>
    </>
  );
}
