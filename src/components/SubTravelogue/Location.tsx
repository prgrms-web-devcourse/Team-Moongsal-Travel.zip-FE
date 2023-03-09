import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTravelogueType } from '@/types/post';

interface LocationProps {
  disabled: boolean;
  field?: ControllerRenderProps<SubTravelogueType, `addresses.${number}.region`>;
}

const Location = ({ field, disabled }: LocationProps) => {
  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput
        {...field}
        fullWidth
        disabled={disabled}
        placeholder='지역을 입력하세요'
        type='text'
      />
      <IconButton sx={{ position: 'absolute', right: 0, top: '0.5rem' }}>
        <LocationOnOutlined />
      </IconButton>
    </Box>
  );
};

export default Location;

const locationBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
};
