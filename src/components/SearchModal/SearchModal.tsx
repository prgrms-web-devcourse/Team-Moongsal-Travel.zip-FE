import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Input, Stack, Typography } from '@mui/material';

import { CenterStyle } from '@/styles/CenterStyle';

const PLACEHOLDER_SEARCH = '도시 또는 키워드를 입력해주세요.';

const SearchModal = () => {
  return (
    <Box sx={WrapperStyle}>
      <Stack flexGrow={1} width='70%'>
        <Box component='form' sx={{ ...CenterStyle, mt: '2rem', mb: '2rem' }}>
          <Input placeholder={PLACEHOLDER_SEARCH} color='blue050' sx={SearchInputStyle} />
          <IconButton size='large' aria-label='search' color='inherit'>
            <SearchIcon color='blue050' />
          </IconButton>
        </Box>
        <Box component='div' sx={CenterStyle}>
          <Typography component='div' sx={PopularSearchStyle}>
            최근 인기 검색어
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default SearchModal;

const WrapperStyle = {
  height: '21rem',
  display: 'flex',
  justifyContent: 'center',
  background: 'linear-gradient(#E3EDF7, #74C9F3)',
} as const;

const SearchInputStyle = {
  width: '70%',
  '&.MuiInput-root': {
    color: 'blue070.main',
    fontWeight: 'bold',
    padding: 0,
    '&:hover fieldset': {
      borderBottomColor: 'blue070.main',
    },
  },
  '&.MuiInput-root:before': {
    borderBottom: '2px solid',
    borderBottomColor: 'blue070.main',
  },
};

const PopularSearchStyle = {
  fontWeight: 'bold',
  width: '80%',
  fontSize: '0.8rem',
};
