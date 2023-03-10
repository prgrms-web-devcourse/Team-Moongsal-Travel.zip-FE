import { Box, Drawer, Stack, Typography } from '@mui/material';

import { CenterStyle } from '@/styles/commonStyle';
import { theme } from '@/styles/MuiTheme';

import { AutoComplete, PlacesAutocomplete } from './';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  return (
    <Drawer anchor='top' open={isOpen} onClose={onClose} sx={style}>
      <Box sx={WrapperStyle}>
        <Stack flexGrow={1} width='70%'>
          <Box sx={{ ...CenterStyle, my: '2rem' }}>
            <AutoComplete>
              <PlacesAutocomplete />
            </AutoComplete>
          </Box>
          <Box component='div' sx={CenterStyle}>
            <Typography component='div' sx={PopularSearchStyle}>
              최근 인기 검색어
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Drawer>
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

const PopularSearchStyle = {
  fontWeight: 'bold',
  width: '80%',
  fontSize: '0.8rem',
} as const;

const style = {
  position: 'absolute',
  top: '70px',
  width: '414px',
  left: '50%',
  transform: 'translateX(-50%)',
  scrollY: 'none',
  borderRadius: '0px 0px 10px 10px',
} as const;
