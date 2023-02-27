import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';

interface StepperProps {
  children: ReactNode;
  steps: string[];
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  onSubmit: () => void;
  activateNext: boolean;
}

const HorizontalLinearStepper = ({
  children,
  steps,
  activeStep,
  setActiveStep,
  onSubmit,
  activateNext,
}: StepperProps) => {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // console.log(activeStep === steps.length - 1 ? 'submit' : 'button');

  const [type, setType] = useState<'submit' | 'button'>('button');
  useEffect(() => {
    activeStep === steps.length - 1 ? setType('submit') : setType('button');
  }, [activeStep, steps.length]);

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

            {/* <Button
              type={activeStep === steps.length - 1 ? 'submit' : 'button'}
              // type='submit'
              // onClick={activeStep === steps.length - 1 ? undefined : handleNext}
              onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
              // disabled={!activateNext}
            >
              {activeStep === steps.length - 1 ? '완료' : '다음'}
            </Button> */}

            <Button
              type={type}
              onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
              disabled={!activateNext}>
              {activeStep === steps.length - 1 ? '완료' : '다음'}
            </Button>

            {/* {activeStep !== steps.length - 1 && (
              <Button type='button' onClick={handleNext}>
                다음
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button type='submit' onClick={onSubmit}>
                완료
              </Button>
            )} */}

            {/* {activeStep !== steps.length - 1 ? (
              <Button type='button' onClick={handleNext}>
                다음
              </Button>
            ) : (
              <Button type='submit' onClick={onSubmit}>
                완료
              </Button>
            )} */}
          </Box>
        </>
      )}
    </Box>
  );
};

export default HorizontalLinearStepper;
