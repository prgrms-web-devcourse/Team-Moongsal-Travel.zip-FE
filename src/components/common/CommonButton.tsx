import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface CommonButtonProps {
  content: string;
  customStyle?: SxProps<Theme>;
  handleClick?: () => void;
}

const CommonButton = ({ content, customStyle }: CommonButtonProps) => {
  return (
    <Button type='button' variant='contained' sx={{ ...buttonStyle, ...customStyle }}>
      {content}
    </Button>
  );
};

export default CommonButton;

const buttonStyle = {
  marginY: 4,
  fontSize: '1rem',
  paddingY: 0,
  height: 80,
  width: '80%',
} as const;
