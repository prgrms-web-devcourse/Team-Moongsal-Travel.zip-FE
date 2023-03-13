import { Box, Stack, styled, Typography } from '@mui/material';
import { ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox';
import Image from 'next/image';
import { location } from 'public/images';
import { Suggestions } from 'use-places-autocomplete';

interface AutoCompleteListProps {
  suggestions: Suggestions;
}

const AutoCompleteList = ({ suggestions }: AutoCompleteListProps) => {
  const { status, data } = suggestions;

  return (
    <PopOver>
      <ComboboxList
        style={{ listStyle: 'none', margin: 0, padding: 0, userSelect: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {status === 'OK' &&
            data.map(({ place_id, structured_formatting }) => (
              <Options key={place_id} value={structured_formatting.main_text}>
                <Stack key={place_id} direction='row' sx={{ my: '10px' }}>
                  <Image
                    src={location}
                    width={15}
                    alt=''
                    style={{ margin: '4px 10px 0 10px' }}
                  />
                  <Stack sx={{ wordWrap: 'break-word' }}>
                    <Typography variant='body2' color='black.main' fontSize='1rem'>
                      {structured_formatting.main_text}
                    </Typography>
                    <Typography variant='body2' color='primary' fontSize='0.8rem'>
                      {structured_formatting.secondary_text}
                    </Typography>
                  </Stack>
                </Stack>
              </Options>
            ))}
        </Box>
      </ComboboxList>
    </PopOver>
  );
};

export default AutoCompleteList;

const PopOver = styled(ComboboxPopover)(({ theme }) => ({
  borderRadius: '0 0 10px 10px',
  background: theme.palette.blue010.main,
  zIndex: 5000,
}));

const Options = styled(ComboboxOption)(() => ({
  cursor: 'pointer',
  margin: 0,
  padding: '0 0.25rem',

  '&:hover': {
    background: '#c9e4ff',
    '&:last-child': {
      borderRadius: '0 0 10px 10px',
    },
  },
}));
