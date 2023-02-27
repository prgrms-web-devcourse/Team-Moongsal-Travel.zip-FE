import { Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  color?: string;
  bold?: string;
  fontSize?: string;
}

const Title = ({ children, color, bold, fontSize }: TitleProps) => {
  return (
    <Typography
      variant='body1'
      component='h2'
      fontSize={fontSize ? fontSize : '1.5rem'}
      color={color && color}
      fontWeight={bold && bold}>
      {children}
    </Typography>
  );
};

export default Title;
