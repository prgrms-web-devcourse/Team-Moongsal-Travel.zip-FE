import { LocationOn } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Combobox, ComboboxInput, ComboboxList, ComboboxPopover } from '@reach/combobox';
import { Fragment } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

const PLACEHOLDER_SEARCH = '도시 또는 키워드를 입력해주세요';

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        placeholder={PLACEHOLDER_SEARCH}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
      />
      <ComboboxPopover>
        <ComboboxList>
          <Grid container alignItems='center'>
            <Grid item sx={{ width: 'calc(100% -44px)', wordWrap: 'break-word' }}>
              {status === 'OK' &&
                data.map(({ place_id, structured_formatting }) => (
                  <Fragment key={place_id}>
                    <Grid item sx={{ display: 'flex', width: 44 }}>
                      <LocationOn />
                    </Grid>
                    <Stack>
                      <Box component='span'>{structured_formatting.main_text}</Box>
                      <Typography variant='body2' color='primary'>
                        {structured_formatting.secondary_text}
                      </Typography>
                    </Stack>
                  </Fragment>
                ))}
            </Grid>
          </Grid>
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutocomplete;

// const SearchInputStyle = {
//   width: '100%',
//   '&.MuiInput-root': {
//     color: 'white.main',
//     fontWeight: 'bold',
//     padding: 0,
//     '&:hover': {
//       borderBottomColor: 'white.main',
//     },
//   },
//   '&.MuiInput-root:before': {
//     borderBottom: '2px solid',
//     borderBottomColor: 'white.main',
//   },
//   '&.MuiInput-root:after': {
//     borderBottom: '2px solid',
//     borderBottomColor: 'gray030.main',
//   },
// };
