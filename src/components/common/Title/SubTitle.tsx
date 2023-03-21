import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  color?: string;
  bold?: string;
  fontSize?: string;
  sx?: SxProps<Theme>;
}

const SubTitle = ({ children, color, bold, fontSize, sx }: SubTitleProps) => {
  return (
    <Typography
      variant='subtitle1'
      component='h2'
      fontSize={fontSize ? fontSize : '1.2rem'}
      color={color && color}
      fontWeight={bold && bold}
      sx={sx}>
      {children}
    </Typography>
  );
};

export default SubTitle;
