import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Register, VerifyByEmail } from '@/components/auth/Register';
import { AuthHeader } from '@/components/common';
import { Stepper } from '@/components/common/Stepper';
import { usePostUserRegister } from '@/hooks/query/auth';
import { UserRegister } from '@/types/auth';

const REGISTER_STEP = ['이메일 인증', '회원가입'];

export type UserRegisterForm = UserRegister & {
  code: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const { mutate: userRegisterMutate } = usePostUserRegister();
  const [activeStep, setActiveStep] = useState(0);
  const [authSuccess, setAuthSuccess] = useState(false);
  const [validNickname, setValidNickname] = useState(false);
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
  const { handleSubmit, control, setError, trigger } = methods;

  const handleRegister = (data: UserRegisterForm) => {
    const { email, nickname, password, birthYear } = data;
    userRegisterMutate(
      { email, nickname, password, birthYear },
      { onSuccess: () => router.push('/auth/login') },
    );
  };

  return (
    <Stack spacing={1} sx={{ paddingBottom: '50px' }}>
      <AuthHeader text='Welcome' />
      <form onSubmit={handleSubmit((data) => handleRegister(data))}>
        <Stepper
          steps={REGISTER_STEP}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          authSuccess={authSuccess}
          validNickname={validNickname}>
          {!activeStep ? (
            <VerifyByEmail
              control={control}
              setAuthSuccess={setAuthSuccess}
              setError={setError}
            />
          ) : (
            <Register
              control={control}
              setValidNickname={setValidNickname}
              setError={setError}
              trigger={trigger}
            />
          )}
        </Stepper>
      </form>
    </Stack>
  );
};

export default RegisterPage;
