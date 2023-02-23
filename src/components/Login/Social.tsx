import { Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Social = () => {
  return (
    <Stack spacing={5} direction='row' justifyContent='center' my={5}>
      <Link href='/'>kakao</Link>
      <Link href='/'>naver</Link>
      <Link href='/'>google</Link>
    </Stack>
  );
};

export default Social;
