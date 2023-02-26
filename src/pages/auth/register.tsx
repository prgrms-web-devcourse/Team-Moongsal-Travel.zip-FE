import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { usePostUserRegister } from '@/api/hooks/user';
import { Register, VerifyByEmail } from '@/components/Register';
import { Stepper } from '@/components/Stepper';

const steps = ['이메일 인증', '회원가입'];

const testData = {
  email: 'testb@gmail.com',
  password: 'qwe123!@#',
  nickname: 'testb',
  birthYear: 1997,
};

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { mutate } = usePostUserRegister();

  const handleRegister = () => {
    mutate(testData, {
      onSuccess: () => {
        console.log('post test 성공');
      },
    });
  };

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        onSubmit={handleRegister}>
        {!activeStep ? <VerifyByEmail /> : <Register />}
      </Stepper>
    </Stack>
  );
};

export default RegisterPage;
