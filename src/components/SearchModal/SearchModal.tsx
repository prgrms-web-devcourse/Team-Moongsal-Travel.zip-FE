import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, Input, Stack, Typography } from '@mui/material';

import { CenterStyle } from '@/styles/CenterStyle';
import { theme } from '@/styles/MuiTheme';

const PLACEHOLDER_SEARCH = '도시 또는 키워드를 입력해주세요.';

const SearchModal = () => {
  return (
    <Box sx={WrapperStyle}>
      <Stack flexGrow={1} width='70%'>
        <Box component='form' sx={{ ...CenterStyle, mt: '2rem', mb: '2rem' }}>
          <Input placeholder={PLACEHOLDER_SEARCH} color='blue050' sx={SearchInputStyle} />
          <IconButton aria-label='search' color='inherit'>
            <SearchIcon color='white' />
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

const { blue010, blue070, gradient1, gradient2 } = theme.palette;

const WrapperStyle = {
  height: '21rem',
  display: 'flex',
  justifyContent: 'center',
  background: `linear-gradient(360deg, ${blue010.main} 2.5%, ${gradient1.main} 32.72%, ${gradient2.main} 71.04%, ${blue070.main} 101.26%)`,
  borderRadius: '0px 0px 10px 10px',
} as const;

const SearchInputStyle = {
  width: '70%',
  '&.MuiInput-root': {
    color: 'white.main',
    fontWeight: 'bold',
    padding: 0,
    '&:hover': {
      borderBottomColor: 'white.main',
    },
  },
  '&.MuiInput-root:before': {
    borderBottom: '2px solid',
    borderBottomColor: 'white.main',
  },
  '&.MuiInput-root:after': {
    borderBottom: '2px solid',
    borderBottomColor: 'gray030.main',
  },
};

const PopularSearchStyle = {
  fontWeight: 'bold',
  width: '80%',
  fontSize: '0.8rem',
};
