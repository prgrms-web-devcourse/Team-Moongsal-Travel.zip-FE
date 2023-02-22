import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Register, VerifyByEmail } from '@/components/Register';
import { Stepper } from '@/components/Stepper';

const steps = ['이메일 인증', '회원가입'];

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <Stepper steps={steps} activeStep={activeStep} setActiveStep={setActiveStep}>
        {!activeStep ? <VerifyByEmail /> : <Register />}
      </Stepper>
    </Stack>
  );
};

export default RegisterPage;
