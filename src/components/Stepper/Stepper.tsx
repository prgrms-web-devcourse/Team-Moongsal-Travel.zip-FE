import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface StepperProps {
  steps: string[];
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  children: ReactNode;
}

const HorizontalLinearStepper: FC<StepperProps> = ({
  steps,
  activeStep,
  setActiveStep,
  children,
}) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ height: '80px' }}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
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
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? '완료' : '다음'}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HorizontalLinearStepper;
