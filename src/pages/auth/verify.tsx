import { Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Register, Verify } from '@/components/Register';
import HorizontalLinearStepper from '@/components/Stepper/Stepper';

const steps = ['이메일 인증', '회원가입'];

const VerifyPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <HorizontalLinearStepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}>
        {!activeStep ? <Verify /> : <Register />}
      </HorizontalLinearStepper>
    </Stack>
  );
};

export default VerifyPage;
