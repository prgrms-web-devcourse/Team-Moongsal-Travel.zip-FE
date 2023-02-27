import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface StepperProps {
  children: ReactNode;
  steps: string[];
  activeStep: number;
  authSuccess: boolean;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const HorizontalLinearStepper = ({
  children,
  steps,
  activeStep,
  authSuccess,
  setActiveStep,
}: StepperProps) => {
  const [buttonType, setButtonType] = useState<'submit' | 'button'>('button');
  const lastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    setButtonType(lastStep ? 'submit' : 'button');
  }, [lastStep]);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ height: '80px' }}>
        {steps.map((label) => (
          <Step key={label}>
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
            <Button
              color='inherit'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}>
              뒤로
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              type={buttonType}
              onClick={lastStep ? undefined : handleNext}
              disabled={!authSuccess}>
              {lastStep ? '완료' : '다음'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HorizontalLinearStepper;
