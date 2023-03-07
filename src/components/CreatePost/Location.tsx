import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTravelogueFormType } from '@/types/post';

interface LocationProps {
  field?: ControllerRenderProps<SubTravelogueFormType, `addresses.${number}.spot`>;
}

const Location = ({ field }: LocationProps) => {
  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput {...field} fullWidth placeholder='지역을 입력하세요' type='text' />
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
