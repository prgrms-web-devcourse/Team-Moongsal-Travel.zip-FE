import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  color?: string;
  bold?: string;
  fontSize?: string;
}

const SubTitle = ({ children, color, bold, fontSize }: SubTitleProps) => {
  return (
    <Typography
      variant='subtitle1'
      component='h2'
      fontSize={fontSize ? fontSize : '1.2rem'}
      color={color && color}
      fontWeight={bold && bold}>
      {children}
    </Typography>
  );
};

export default SubTitle;
