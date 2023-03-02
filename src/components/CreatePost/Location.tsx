import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput } from '@mui/material';
import { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { CreatePost, SubTravelogueForm } from '@/types/post';

interface LocationProps {
  readonly?: boolean;
  name?: ControllerRenderProps<CreatePost, 'country.name'>;
  field?: ControllerRenderProps<SubTravelogueForm, `addresses.${number}.spot`>;
}

const Location = ({ readonly, name, field }: LocationProps) => {
  useEffect(() => {
    if (name) {
      readonly ? name.onChange('대한민국') : name.onChange('');
    }
  }, [readonly]);

  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput
        {...name}
        {...field}
        fullWidth
        placeholder='지역을 입력하세요'
        type='text'
        readOnly={readonly}
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
  paddingBottom: '15px',
  position: 'relative',
  width: '100%',
};
