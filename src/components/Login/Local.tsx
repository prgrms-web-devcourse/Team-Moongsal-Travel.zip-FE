import { Alert, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';

import { usePostUserSignIn } from '@/api/hooks/user';
import { CommonInput } from '@/components/common';
import { ACCESS_TOKEN } from '@/constants';
import useAuth from '@/hooks/useAuth';
import { User } from '@/types/auth';
import { setItem } from '@/utils/storage';

interface FormState {
  email: string;
  password: string;
}

const Local = () => {
  const { control, handleSubmit } = useForm<User>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { mutate, error } = usePostUserSignIn();
  const router = useRouter();
  const { setIsSignin } = useAuth();

  const onSubmit = (formData: FormState) => {
    mutate(formData, {
      onSuccess: ({ data }) => {
        setItem(ACCESS_TOKEN, data.accessToken);
        setIsSignin(true);
        router.push('/');
      },
    });
  };

  return (
    <>
      <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert severity='error'>이메일 또는 비밀번호가 잘못되었습니다.</Alert>}

        <CommonInput
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
        <CommonInput
          id='password'
          type='password'
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
        <Link href='/auth/register'>회원가입</Link>
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
