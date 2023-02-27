import { Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { usePostUserRegister } from '@/api/hooks/user';
import { UserRegister } from '@/api/user/type';
import { Register, VerifyByEmail } from '@/components/Register';
import { Stepper } from '@/components/Stepper';

const steps = ['이메일 인증', '회원가입'];

export type UserRegisterForm = UserRegister & {
  code: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const { mutate: userRegisterMutate } = usePostUserRegister();
  const [activeStep, setActiveStep] = useState(0);
  const [authSuccess, setAuthSuccess] = useState(false);

  const methods = useForm<UserRegisterForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      birthYear: '',
    },
  });

  const handleRegister = () => {
    userRegisterMutate(
      {
        email: methods.getValues('email'),
        nickname: methods.getValues('nickname'),
        password: methods.getValues('password'),
        birthYear: methods.getValues('birthYear'),
      },
      {
        onSuccess: () => router.push('/auth/login'),
      },
    );
  };

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <form onSubmit={methods.handleSubmit(handleRegister)}>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          authSuccess={authSuccess}>
          {!activeStep ? (
            <VerifyByEmail methods={methods} setAuthSuccess={setAuthSuccess} />
          ) : (
            <Register methods={methods} />
          )}
        </Stepper>
      </form>
    </Stack>
  );
};

export default RegisterPage;
