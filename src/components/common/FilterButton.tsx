import { Tune as TuneIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  SliderThumb,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SubTitle } from '@/components/common';
import { filterFormDefault } from '@/constants/defaultFormValue';
import useFilterForm from '@/hooks/useFilterForm';
import { FilterFormType, FilterProps } from '@/types/filter';

interface FilterButtonProps {
  setFilter: Dispatch<SetStateAction<FilterProps>>;
}

const FilterButton = ({ setFilter }: FilterButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { handleSubmit, control } = useForm<FilterFormType>(filterFormDefault);
  const { minDays, maxDays, minCost, maxCost, keyword, sort } = useFilterForm(control);

  useEffect(() => {
    router.isReady && keyword.onChange(router.query.keyword);
  }, [router.isReady, router.query.keyword, keyword]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleApply = async (data: FilterFormType) => {
    console.log(data);
    setFilter({
      minDays: data.minDays,
      maxDays: data.maxDays,
      minCost: data.minCost,
      maxCost: data.maxCost,
      sort: data.sort,
    });
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '2rem',
        maxWidth: '90%',
        margin: '2rem auto',
      }}>
      <Box>
        <Button variant='outlined' startIcon={<TuneIcon />} onClick={toggleDrawer(true)}>
          필터
        </Button>
      </Box>
      <SwipeableDrawer
        container={() => document.body}
        anchor='bottom'
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableScrollLock
        sx={swipeStyle}
        ModalProps={{
          keepMounted: false,
        }}>
        <Puller />
        <Box sx={{ pb: 2 }} />
        <Box component='form' onSubmit={handleSubmit(handleApply)}>
          <Box>
            <FormControl>
              <SubTitle>정렬</SubTitle>
              <RadioGroup row {...sort} defaultValue='recent' defaultChecked>
                <FormControlLabel value='recent' control={<Radio />} label='최신순' />
                <FormControlLabel value='popular' control={<Radio />} label='인기순' />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubTitle>여행 경비</SubTitle>
            <Stack flexDirection='column'>
              <StyledSlider
                value={[parseInt(minCost.value || '0'), parseInt(maxCost.value || '30')]}
                onChange={(_, newValue) => {
                  if (Array.isArray(newValue)) {
                    minCost.onChange(newValue[0].toString());
                    maxCost.onChange(newValue[1].toString());
                  }
                }}
                valueLabelDisplay='auto'
                step={100000}
                min={0}
                max={10000000}
                slots={{ thumb: ThumbComponent }}
              />
              <Stack flexDirection='row'>
                <TextField {...minCost} placeholder='최소금액' type='number' />
                <TextField {...maxCost} placeholder='최대금액' type='number' />
              </Stack>
              <Typography variant='body1' component='span'>
                {minCost.value &&
                  maxCost.value &&
                  `최소:${parseInt(minCost.value).toLocaleString(
                    'ko-KR',
                  )}원 - 최대:${parseInt(maxCost.value).toLocaleString('ko-KR')}원`}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubTitle>여행 기간</SubTitle>
            <Stack flexDirection='column'>
              <StyledSlider
                value={[parseInt(minDays.value || '0'), parseInt(maxDays.value || '30')]}
                onChange={(_, newValue) => {
                  if (Array.isArray(newValue)) {
                    minDays.onChange(newValue[0].toString());
                    maxDays.onChange(newValue[1].toString());
                  }
                }}
                valueLabelDisplay='auto'
                min={0}
                max={30}
                slots={{ thumb: ThumbComponent }}
              />
              <Stack flexDirection='row'>
                <TextField {...minDays} placeholder='최소기간' type='number' />
                <TextField {...maxDays} placeholder='최대기간' type='number' />
              </Stack>
              <Typography variant='body1' component='span'>
                {minDays.value &&
                  maxDays.value &&
                  `최소:${minDays.value}일 - 최대:${maxDays.value}일`}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type='submit'>적용</Button>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default FilterButton;

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.gray030.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const swipeStyle = {
  '&.MuiDrawer-root > .MuiPaper-root': {
    boxSizing: 'border-box',
    minWidth: '390px',
    maxWidth: '414px',
    margin: 'auto',
    padding: '1rem 2rem',
    overflow: 'visible',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
} as const;

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
