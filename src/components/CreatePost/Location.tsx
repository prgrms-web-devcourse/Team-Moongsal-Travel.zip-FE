import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput } from '@mui/material';
import { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { CreatePost } from '@/api/createPost/type';

interface LocationProps {
  readonly?: boolean;
  name: ControllerRenderProps<CreatePost, 'country.name'>;
}

const Location = ({ readonly, name }: LocationProps) => {
  useEffect(() => {
    readonly ? name.onChange('대한민국') : name.onChange('');
  }, [readonly]);

  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput
        {...name}
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
};
