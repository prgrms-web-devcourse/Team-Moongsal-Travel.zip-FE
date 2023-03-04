import { Autocomplete, Box, TextField } from '@mui/material';

import { COUNTRIES } from '@/constants';

const CountrySelect = () => {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={COUNTRIES}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component='li' {...props}>
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label='지역을 입력하세요.'
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
