import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import CommonInput from '../common/CommonInput';

interface FormState {
  email: string;
  password: string;
}

const Local = () => {
  const { control, handleSubmit } = useForm<FormState>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormState) => {
    console.log(data);
  };

  return (
    <>
      <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
        <CommonInput<FormState>
          id='email'
          label='이메일'
          variant='outlined'
          control={control}
          name='email'
          rules={{
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          }}
        />
        <CommonInput<FormState>
          id='password'
          label='비밀번호'
          variant='outlined'
          control={control}
          name='password'
          rules={{
            required: '비밀번호는 필수 입력입니다.',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/,
              message: '비밀번호 형식에 맞지 않습니다.',
            },
          }}
        />
        <Box width='100%'>
          <Button type='submit' variant='contained' sx={buttonStyle}>
            로그인
          </Button>
        </Box>
      </Stack>

      <Stack spacing={6} direction='row' justifyContent='center'>
        <Link href='/'>비밀번호 찾기</Link>
        <Link href='/'>회원가입</Link>
      </Stack>
    </>
  );
};

export default Local;

const buttonStyle = {
  marginY: 4,
  fontSize: '1rem',
  paddingY: 0,
  height: 56,
  width: '100%',
} as const;
