import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <Typography variant='body1' component='h2' fontSize={24} fontWeight='bold'>
      {children}
    </Typography>
  );
};

export default Title;
