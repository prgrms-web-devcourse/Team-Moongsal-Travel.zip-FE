import { StepButton } from '@mui/material';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepContent from '@mui/material/StepContent';
import Stepper from '@mui/material/Stepper';
import { useState } from 'react';

import { SubTravelogue } from '@/components/SubTravelogue';

export type TravelogueInfoType = {
  id: string;
  step: string[];
};

interface VerticalStepperProps {
  travelogueId: string;
  subTravelogueStep: string[];
}

const VerticalStepper = ({ travelogueId, subTravelogueStep }: VerticalStepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  const handleComplete = () => {
    setCompleted((prev) => ({ ...prev, [activeStep]: true }));
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        {subTravelogueStep.map((step, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color='inherit' onClick={() => setActiveStep(index)}>
              {`${step} ${completed[index] ? '(저장)' : ''}`}
            </StepButton>
            <StepContent>
              <SubTravelogue
                travelogueId={travelogueId}
                index={index}
                handleComplete={handleComplete}
              />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
