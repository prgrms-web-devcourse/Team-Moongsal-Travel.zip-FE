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
  const { handleSubmit, control, setError } = methods;

  const handleRegister = (data: UserRegisterForm) => {
    const { email, nickname, password, birthYear } = data;
    userRegisterMutate(
      { email, nickname, password, birthYear },
      { onSuccess: () => router.push('/auth/login') },
    );
  };

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <form onSubmit={handleSubmit((data) => handleRegister(data))}>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          authSuccess={authSuccess}>
          {!activeStep ? (
            <VerifyByEmail
              control={control}
              setAuthSuccess={setAuthSuccess}
              setError={setError}
            />
          ) : (
            <Register control={control} />
          )}
        </Stepper>
      </form>
    </Stack>
  );
};

export default RegisterPage;
