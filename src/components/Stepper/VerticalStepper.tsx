import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';

import { SubTravelogue } from '@/components/CreatePost';

interface VerticalStepperProps {
  travelogueId: string;
  subTravelogueStep: string[];
}

const VerticalStepper = ({ travelogueId, subTravelogueStep }: VerticalStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setActiveStep((prev) => prev - 1);
  };

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {subTravelogueStep.map((step, index) => (
          <Step key={index} onClick={() => handleStep(index)}>
            <StepLabel>{step}</StepLabel>
            <StepContent>
              <SubTravelogue travelogueId={travelogueId} />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant='contained'
                    onClick={(e) => handleNext(e)}
                    sx={{ mt: 1, mr: 1 }}>
                    {index === subTravelogueStep.length - 1 ? '완료' : '다음'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={(e) => handleBack(e)}
                    sx={{ mt: 1, mr: 1 }}>
                    이전
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
