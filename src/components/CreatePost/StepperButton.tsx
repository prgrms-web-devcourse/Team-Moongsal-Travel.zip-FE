import { ArrowBackIosNew, ArrowForwardIosOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface StepperButtonProps {
  format: 'forward' | 'backword';
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
}

const StepperButton = ({ format, steps, setSteps }: StepperButtonProps) => {
  return (
    <>
      {format === 'forward' ? (
        <Button
          variant='contained'
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setSteps(steps + 1)}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            다음
          </Typography>
          {<ArrowForwardIosOutlined sx={{ fontSize: '0.5rem' }} />}
        </Button>
      ) : (
        <Button
          variant='contained'
          sx={{ display: 'flex', alignItems: 'center' }}
          onClick={() => setSteps(steps - 1)}>
          {<ArrowBackIosNew sx={{ fontSize: '0.5rem' }} />}
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            이전
          </Typography>
        </Button>
      )}
    </>
  );
};

export default StepperButton;
