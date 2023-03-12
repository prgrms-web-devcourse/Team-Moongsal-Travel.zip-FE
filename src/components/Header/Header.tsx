import { Search as SearchIcon } from '@mui/icons-material';
import {
  alpha,
  AppBar,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Combobox, ComboboxInput } from '@reach/combobox';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';

import { AutoCompleteList } from '@/components/SearchModal';
import useAutoComplete from '@/hooks/useAutoComplete';

const Header = () => {
  const router = useRouter();
  const { value, setValue, suggestions, clearSuggestions } = useAutoComplete();

  const handleSubmit = (value: string) => {
    router.push({
      pathname: '/post/travelogueList',
      query: { keyword: value },
    });
    setValue('');
  };

  const handleSelect = (address: string) => {
    setValue(address, false);
    clearSuggestions();
    handleSubmit(address);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(value);
    }
  };

  return (
    <Box sx={BoxStyle}>
      <AppBar sx={AppBarStyle}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant='h1'
            noWrap
            component='h1'
            sx={LogoStyle}
            onClick={() => router.push('/')}>
            🛫travel.zip
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Combobox onSelect={handleSelect} onKeyDown={handleKeyDown}>
              <ComboboxInput
                as={StyledInputBase}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                onSelect={(e) => {
                  setValue((e.target as HTMLInputElement).value);
                }}
              />
              <AutoCompleteList suggestions={suggestions} />
            </Combobox>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    marginLeft: theme.spacing(0.5),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '0ch',
      '&:focus': {
        width: '15ch',
      },
    },
  },
}));

const AppBarStyle = {
  position: 'static',
  bgcolor: 'blue070.main',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
} as const;

const BoxStyle = {
  position: 'sticky',
  top: 0,
  zIndex: '1201',
} as const;

const LogoStyle = {
  display: { xs: 'none', sm: 'block' },
  fontSize: '1rem',
  fontFamily: 'KOHIBaeum',
  cursor: 'pointer',
} as const;
