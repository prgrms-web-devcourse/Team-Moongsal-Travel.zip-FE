import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { bigLogo, worldMap } from 'public/images';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { usePostUserRegister } from '@/api/hooks/user';
import { Register, VerifyByEmail } from '@/components/Register';
import { Stepper } from '@/components/Stepper';
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
    <Stack spacing={1} sx={{ position: 'relative', paddingBottom: '50px' }}>
      <Box
        sx={{
          backgroundColor: 'blue070.main',
          borderRadius: '0 0 10px 10px',
          width: '100%',
          height: '250px',
          textAlign: 'center',
        }}>
        <Box
          sx={{
            position: 'absolute',
            width: '400px',
            top: '10px',
            left: '0',
            opacity: '0.4',
          }}>
          <Image src={worldMap} width={414} height={220} alt='logo' />
        </Box>
        <Image src={bigLogo} width={350} height={170} alt='logo' />
        <Typography
          component='h1'
          variant='h6'
          color='white.main'
          sx={{
            position: 'absolute',
            top: '140px',
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '100%',
            color: 'blue010.main',
            fontSize: '18px',
          }}>
          내가 가진 여행 기억의 모음집
        </Typography>
        <Typography
          component='h2'
          variant='h5'
          sx={{ fontWeight: '600', color: 'white.main', mt: '30px' }}>
          Welcome
        </Typography>
      </Box>
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
