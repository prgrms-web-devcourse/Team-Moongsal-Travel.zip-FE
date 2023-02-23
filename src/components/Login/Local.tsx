import { Button, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Local = () => {
  return (
    <>
      <Stack spacing={4}>
        <TextField id='outlined-basic' label='이메일' variant='outlined' />
        <TextField id='outlined-basic' label='비밀번호' variant='outlined' />
      </Stack>
      <Button variant='contained' sx={buttonStyle}>
        로그인
      </Button>

      <Stack spacing={6} direction='row' justifyContent='center'>
        <Link href='/'>비밀번호 찾기</Link>
        <Link href='/'>회원가입</Link>
      </Stack>
    </>
  );
};

export default Local;

const buttonStyle = {
  marginY: 5.5,
  fontSize: '1rem',
  paddingY: 0,
  height: 56,
} as const;
