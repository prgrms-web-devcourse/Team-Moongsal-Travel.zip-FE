import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface CommonButtonProps {
  content: string;
  customStyle?: SxProps<Theme>;
  isVariant?: boolean;
  handleClick?: () => void;
}

const CommonButton = ({
  content,
  customStyle,
  isVariant = true,
  handleClick,
}: CommonButtonProps) => {
  return (
    <Button
      onClick={handleClick && handleClick}
      type='button'
      variant={isVariant ? 'contained' : undefined}
      sx={{ ...buttonStyle, ...customStyle }}>
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
