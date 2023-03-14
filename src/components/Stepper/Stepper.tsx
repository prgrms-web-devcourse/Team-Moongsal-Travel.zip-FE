import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

import { stepStyle } from '@/styles/commonStyle';

interface StepperProps {
  children: ReactNode;
  steps: string[];
  activeStep: number;
  authSuccess: boolean;
  validNickname: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const HorizontalLinearStepper = ({
  children,
  steps,
  activeStep,
  authSuccess,
  validNickname,
  setActiveStep,
}: StepperProps) => {
  const [buttonType, setButtonType] = useState<'submit' | 'button'>('button');
  const lastStep = activeStep === steps.length - 1;

  useEffect(() => {
    setButtonType(lastStep ? 'submit' : 'button');
  }, [lastStep]);

  return (
    <Box sx={{ padding: '0 15px' }}>
      <Stepper activeStep={activeStep} sx={{ height: '80px' }}>
        {steps.map((label) => (
          <Step key={label} sx={stepStyle}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>회원가입 완료</Typography>
      ) : (
        <>
          {children}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              type={buttonType}
              onClick={!lastStep ? () => setActiveStep((prev) => prev + 1) : undefined}
              disabled={!lastStep ? !authSuccess : !validNickname}
              variant='contained'
              fullWidth
              sx={{ backgroundColor: 'blue070.main', mt: 1.5, height: '40px' }}>
              {lastStep ? '완료' : '다음'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HorizontalLinearStepper;
