import {
  Box,
  Slider,
  SliderThumb,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTitle } from '@/components/common/Title';
import { FilterFormType } from '@/types/search';

interface FilterMenuProps {
  subTitle: string;
  // 해당부분을 ControllerRenderProps<FilterFormType, 'maxDays' | 'maxCost'>; 이렇게 쓰고싶었는데 타입에러 발생
  minState:
    | ControllerRenderProps<FilterFormType, 'minDays'>
    | ControllerRenderProps<FilterFormType, 'minCost'>;
  maxState:
    | ControllerRenderProps<FilterFormType, 'maxDays'>
    | ControllerRenderProps<FilterFormType, 'maxCost'>;
  minValue: number;
  maxValue: number;
}

const FilterMenu = ({
  subTitle,
  minState,
  maxState,
  minValue,
  maxValue,
}: FilterMenuProps) => {
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
          min={minValue}
          max={maxValue}
          slots={{ thumb: ThumbComponent }}
        />
        <Stack flexDirection='row'>
          <TextField {...minState} placeholder='최소기간' type='number' />
          <TextField {...maxState} placeholder='최대기간' type='number' />
        </Stack>
        <Typography variant='body1' component='span'>
          {minState.value &&
            maxState.value &&
            `최소:${minState.value}일 - 최대:${maxState.value}일`}
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
