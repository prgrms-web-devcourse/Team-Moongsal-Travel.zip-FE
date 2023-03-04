import { LocationOnOutlined as LocationOnOutlinedIcon } from '@mui/icons-material';
import { Autocomplete, Box, FormHelperText, TextField } from '@mui/material';
import { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { COUNTRIES } from '@/constants';
import { CreatePost } from '@/types/post';

interface LocationProps {
  isSelected: boolean;
  name: ControllerRenderProps<CreatePost, 'country.name'>;
}

const CountrySelect = ({ isSelected, name }: LocationProps) => {
  useEffect(() => {
    if (name) {
      isSelected ? name.onChange('대한민국') : name.onChange('');
    }
  }, [isSelected]);

  return (
    <>
      {isSelected ? (
        <FormHelperText sx={{ fontSize: '1rem' }}>대한민국</FormHelperText>
      ) : (
        <Autocomplete
          sx={{ width: '100%' }}
          options={COUNTRIES}
          autoHighlight
          getOptionLabel={(option) => option.label}
          popupIcon={<LocationOnOutlinedIcon />}
          renderOption={(props, option) => (
            <Box component='li' {...props}>
              {option.label} ({option.code})
            </Box>
          )}
          renderInput={(params) => {
            return <TextField {...params} placeholder='지역을 입력하세요' />;
          }}
          onChange={(_, data) => {
            if (data) {
              name.onChange(data.label);
            }
          }}
        />
      )}
    </>
  );
};

export default CountrySelect;
