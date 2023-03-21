import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  color?: string;
  bold?: string;
  fontSize?: string;
  sx?: SxProps<Theme>;
}

const Title = ({ children, color, bold, fontSize, sx }: TitleProps) => {
  return (
    <Typography
      variant='body1'
      component='h2'
      fontSize={fontSize ? fontSize : '1.4rem'}
      color={color && color}
      fontWeight={bold && bold}
      sx={sx}>
      {children}
    </Typography>
  );
};

export default Title;
