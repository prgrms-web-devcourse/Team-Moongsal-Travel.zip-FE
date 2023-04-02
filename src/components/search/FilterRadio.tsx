import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTitle } from '@/components/common/Title';
import { FilterFormType } from '@/types/search';

interface FilterRadioProps {
  sort: ControllerRenderProps<FilterFormType, 'sort'>;
}

const FilterRadio = ({ sort }: FilterRadioProps) => {
  return (
    <Box>
      <FormControl>
        <SubTitle>정렬</SubTitle>
        <RadioGroup row {...sort} defaultValue='recent' defaultChecked>
          <FormControlLabel value='recent' control={<Radio />} label='최신순' />
          <FormControlLabel value='popular' control={<Radio />} label='인기순' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default FilterRadio;
