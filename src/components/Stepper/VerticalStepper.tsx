import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';

import { SubTravelogue } from '@/components/CreatePost';
import { ButtonEventType } from '@/types/common';
import { StepType } from '@/types/post';

interface VerticalStepperProps {
  travelogueId: string;
  subTravelogueStep: string[];
}

const VerticalStepper = ({ travelogueId, subTravelogueStep }: VerticalStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (e: ButtonEventType, type: StepType) => {
    e.stopPropagation();
    setActiveStep((prev) => (type === 'next' ? prev + 1 : prev - 1));
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {subTravelogueStep.map((step, index) => (
          <Step key={index} onClick={() => setActiveStep(index)}>
            <StepLabel>{step}</StepLabel>
            <StepContent>
              <SubTravelogue
                travelogueId={travelogueId}
                index={index}
                isLastStep={index === subTravelogueStep.length - 1}
                handleStep={handleStep}
              />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
