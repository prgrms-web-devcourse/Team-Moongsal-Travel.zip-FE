import { Search as SearchIcon } from '@mui/icons-material';
import { IconButton, Stack, styled } from '@mui/material';
import { Combobox, ComboboxInput } from '@reach/combobox';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';
import { useSetRecoilState } from 'recoil';

import AutoCompleteList from '@/components/SearchModal/AutoCompleteList';
import useAutoComplete from '@/hooks/useAutoComplete';
import { isHeaderOpenState } from '@/recoil';

const PLACEHOLDER_SEARCH = '도시 또는 키워드를 입력해주세요';

const PlacesAutocomplete = () => {
  const setIsOpen = useSetRecoilState(isHeaderOpenState);
  const router = useRouter();
  const { ready, value, setValue, suggestions, handleSelect } = useAutoComplete();

  const handleSubmit = () => {
    setIsOpen(false);
    router.push({
      pathname: '/post/travelogueList',
      query: { keyword: value },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Combobox onSelect={handleSelect} onKeyDown={handleKeyDown} style={{ width: '70%' }}>
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
      <AutoCompleteList suggestions={suggestions} />
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
