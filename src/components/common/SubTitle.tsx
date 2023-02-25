import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <Typography variant='subtitle1' component='h2' fontSize='1.2rem'>
      {children}
    </Typography>
  );
};

export default SubTitle;
