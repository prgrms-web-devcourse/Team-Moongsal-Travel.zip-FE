import { LocationOnOutlined } from '@mui/icons-material';
import { Box, IconButton, styled } from '@mui/material';
import { Combobox, ComboboxInput } from '@reach/combobox';
import { ControllerRenderProps } from 'react-hook-form';

import { AutoCompleteList } from '@/components/SearchModal';
import useAutoComplete from '@/hooks/useAutoComplete';
import { SubTravelogueType } from '@/types/post';

interface LocationProps {
  field?: ControllerRenderProps<SubTravelogueType, `addresses.${number}.region`>;
}

const Location = ({ field }: LocationProps) => {
  const { ready, setValue, suggestions, handleSelect } = useAutoComplete();

  const handleRegionSelect = async (region: string) => {
    field?.onChange(region);
    handleSelect(region);
  };

  return (
    <Combobox onSelect={handleRegionSelect} style={{ width: '100%' }}>
      <Box sx={locationBoxStyle}>
        <SearchInput
          {...field}
          placeholder='장소를 입력하세요'
          value={field?.value}
          onChange={(e) => {
            field?.onChange(e.target.value);
            setValue(e.target.value);
          }}
          disabled={!ready}
        />
        <IconButton sx={{ position: 'absolute', right: '2px', top: '0.5rem' }}>
          <LocationOnOutlined />
        </IconButton>
        <AutoCompleteList suggestions={suggestions} />
      </Box>
    </Combobox>
  );
};

export default Location;

const locationBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
};

const SearchInput = styled(ComboboxInput)(() => ({
  width: '100%',
  height: '1.4375em',
  padding: '16.5px 14px',
  border: '1px solid rgba(0, 0, 0, 0.23)',
  borderRadius: '4px',
  font: 'normal 400 1rem/1.4375em Noto Sans KR, sans-serif',
  color: 'rgba(0, 0, 0, 0.87)',
  '&:focus': {
    border: `2px solid #0080FF`,
    outline: 'none',
  },
}));
