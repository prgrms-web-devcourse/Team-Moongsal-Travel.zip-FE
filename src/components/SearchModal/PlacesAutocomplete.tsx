import { LocationOn } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
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
        style={{ width: '100%' }}
      />
      <ComboboxPopover>
        <ComboboxList>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {status === 'OK' &&
              data.map(({ place_id, structured_formatting }) => (
                <Box key={place_id} sx={{ display: 'flex' }}>
                  <LocationOn />
                  <Stack>
                    <ComboboxOption
                      key={place_id}
                      value={structured_formatting.main_text}
                    />
                    <Typography variant='body2' color='primary'>
                      {structured_formatting.secondary_text}
                    </Typography>
                  </Stack>
                </Box>
              ))}
          </Box>
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default PlacesAutocomplete;
//  wordWrap: 'break-word'
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
