import { LocationOnOutlined as LocationOnOutlinedIcon } from '@mui/icons-material';
import { Autocomplete, Box, FormHelperText, TextField } from '@mui/material';
import { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { COUNTRIES } from '@/constants';
import { TravelogueFormType } from '@/types/post';

interface LocationProps {
  isKorea: boolean;
  name: ControllerRenderProps<TravelogueFormType, 'country.name'>;
}

const CountrySelect = ({ isKorea, name }: LocationProps) => {
  useEffect(() => {
    isKorea && name.onChange('대한민국');
  }, []);

  return (
    <>
      {isKorea ? (
        <FormHelperText sx={{ fontSize: '1rem' }}>대한민국</FormHelperText>
      ) : (
        <Autocomplete
          sx={{ width: '100%' }}
          options={COUNTRIES}
          value={COUNTRIES.find((c) => c.label === name.value)}
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
