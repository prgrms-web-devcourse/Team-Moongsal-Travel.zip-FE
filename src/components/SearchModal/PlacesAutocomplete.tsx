import { LocationOn } from '@mui/icons-material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Box, IconButton, Stack, styled, Typography } from '@mui/material';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import { useRouter } from 'next/router';
import { KeyboardEvent} from 'react'
import { useSetRecoilState } from 'recoil';
import usePlacesAutocomplete from 'use-places-autocomplete';

import { isHeaderOpenState } from '@/recoil';

const PLACEHOLDER_SEARCH = '도시 또는 키워드를 입력해주세요';

const PlacesAutocomplete = () => {
  const setIsOpen = useSetRecoilState(isHeaderOpenState);
  const router = useRouter();
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

  const handleSubmit = () => {
    setIsOpen(false);
    router.push({
      pathname: '/post/travelogueList',
      query: { keyword: value },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <Combobox
      onSelect={handleSelect}
      onKeyDown={handleKeyDown}
      style={{ width: '70%' }}>
      <Stack flexDirection='row'>
        <SearchInput
          placeholder={PLACEHOLDER_SEARCH}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
        />
        <IconButton aria-label='search' color='inherit' onClick={handleSubmit}>
          <SearchIcon color='white' />
        </IconButton>
      </Stack>
      <PopOver>
        <ComboboxList
          style={{ listStyle: 'none', margin: 0, padding: 0, userSelect: 'none' }}>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            {status === 'OK' &&
              data.map(({ place_id, structured_formatting }) => (
                <Options key={place_id} value={structured_formatting.main_text}>
                  <Box key={place_id} sx={{ display: 'flex', mt: '1rem' }}>
                    <LocationOn />
                    <Stack sx={{ wordWrap: 'break-word' }}>
                      <Typography variant='body2' color='black.main' fontSize='1rem'>
                        {structured_formatting.main_text}
                      </Typography>
                      <Typography variant='body2' color='primary' fontSize='0.8rem'>
                        {structured_formatting.secondary_text}
                      </Typography>
                    </Stack>
                  </Box>
                </Options>
              ))}
          </Box>
        </ComboboxList>
      </PopOver>
    </Combobox>
  );
};

export default PlacesAutocomplete;

const SearchInput = styled(ComboboxInput)(({ theme }) => ({
  width: '100%',
  color: theme.palette.white.main,
  fontWeight: 'bold',
  padding: '1rem 0.8rem',
  border: 0,
  display: 'block',
  background: 'none',
  borderBottom: `2px solid ${theme.palette.white.main}`,
  '&:hover': {
    borderBottom: `2px solid ${theme.palette.blue050.main}`,
  },
  '&:focus': {
    borderBottom: `2px solid ${theme.palette.blue050.main}`,
    outline: 'none',
  },
}));

const PopOver = styled(ComboboxPopover)(({ theme }) => ({
  borderRadius: '0 0 10px 10px',
  background: theme.palette.blue010.main,
  zIndex: 5000,
}));

const Options = styled(ComboboxOption)(({ theme }) => ({
  cursor: 'pointer',
  margin: 0,
  padding: '0 0.25rem',

  '&:hover': {
    background: theme.palette.gray030.main,
    '&:last-child': {
      borderRadius: '0 0 10px 10px',
    },
  },
}));
