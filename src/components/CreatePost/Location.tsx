import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, OutlinedInput } from '@mui/material';
import { ChangeEvent, useState } from 'react';

interface LocationProps {
  readonly?: boolean;
}

const Location = ({ readonly }: LocationProps) => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Box sx={locationBoxStyle}>
      <OutlinedInput
        fullWidth
        placeholder='지역을 입력하세요'
        type='text'
        onChange={onChange}
        readOnly={readonly && readonly}
        value={readonly ? '국내' : value}
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
