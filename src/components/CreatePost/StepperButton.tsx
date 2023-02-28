import { ArrowBackIosNew, ArrowForwardIosOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

import { CreatePost } from '@/types/CreatePost';

interface StepperButtonProps {
  format: 'forward' | 'backward' | 'complete';
  steps: number;
  setSteps: Dispatch<SetStateAction<number>>;
  onClick: UseFormHandleSubmit<CreatePost>;
}

const StepperButton = ({ format, steps, setSteps, onClick }: StepperButtonProps) => {
  const router = useRouter();

  return (
    <>
      {format === 'forward' ? (
        <Button
          variant='contained'
          sx={centered}
          type='submit'
          onClick={() => {
            onClick((data) => console.log(data))();
            setSteps(steps + 1);
          }}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            다음
          </Typography>
          {<ArrowForwardIosOutlined sx={{ fontSize: '0.5rem' }} />}
        </Button>
      ) : format === 'backward' ? (
        <Button variant='contained' sx={centered} onClick={() => setSteps(steps - 1)}>
          {<ArrowBackIosNew sx={{ fontSize: '0.5rem' }} />}
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            이전
          </Typography>
        </Button>
      ) : (
        <Button variant='contained' sx={centered} onClick={() => router.push('/')}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            완료
          </Typography>
          {<ArrowForwardIosOutlined sx={{ fontSize: '0.5rem' }} />}
        </Button>
      )}
    </>
  );
};

export default StepperButton;

const centered = {
  display: 'flex',
  alignItems: 'center',
} as const;
