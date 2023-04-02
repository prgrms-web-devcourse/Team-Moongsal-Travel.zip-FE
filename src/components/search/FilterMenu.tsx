import {
  Box,
  Slider,
  SliderThumb,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

import { SubTitle } from '@/components/common/Title';
import { FilterFormType } from '@/types/search';
import { getTextBySubTitle } from '@/utils/helper';

interface CustomControllerRenderProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends ControllerRenderProps<TFieldValues, TName> {}

interface FilterMenuProps {
  subTitle: '여행 기간' | '여행 경비';
  minState: CustomControllerRenderProps<FilterFormType, 'minDays' | 'minCost'>;
  maxState: CustomControllerRenderProps<FilterFormType, 'maxDays' | 'maxCost'>;
  minValue: number;
  maxValue: number;
  steps: number;
}

const FilterMenu = ({
  subTitle,
  minState,
  maxState,
  minValue,
  maxValue,
  steps,
}: FilterMenuProps) => {
  const { minPlaceholder, maxPlaceholder, helperText } = getTextBySubTitle(
    subTitle,
    minState.value || '',
    maxState.value || '',
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <SubTitle>{subTitle}</SubTitle>
      <Stack flexDirection='column'>
        <StyledSlider
          value={[
            parseInt(minState.value || `${minValue}`),
            parseInt(maxState.value || `${maxValue}`),
          ]}
          onChange={(_, newValue) => {
            if (Array.isArray(newValue)) {
              minState.onChange(newValue[0].toString());
              maxState.onChange(newValue[1].toString());
            }
          }}
          valueLabelDisplay='auto'
          step={steps}
          min={minValue}
          max={maxValue}
          slots={{ thumb: ThumbComponent }}
        />
        <Stack direction='row' spacing={1}>
          <TextField {...minState} placeholder={minPlaceholder} type='number' />
          <TextField {...maxState} placeholder={maxPlaceholder} type='number' />
        </Stack>
        <Typography variant='body1' component='span'>
          {minState.value && maxState.value && helperText}
        </Typography>
      </Stack>
    </Box>
  );
};

export default FilterMenu;

interface ThumbComponentProps extends React.HTMLAttributes<unknown> {}
function ThumbComponent(props: ThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className='bar' />
      <span className='bar' />
      <span className='bar' />
    </SliderThumb>
  );
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.blue070.main,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    width: 27,
    height: 27,
    backgroundColor: theme.palette.white.main,
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: `0 0 0 1px rgba(${theme.palette.blue070.main}, 0.16)`,
    },
    '& .bar': {
      width: 1,
      height: 9,
      marginRight: 1,
      marginLeft: 1,
      backgroundColor: 'currentColor',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    height: 3,
    color: theme.palette.gray010.main,
    opacity: 1,
  },
}));
