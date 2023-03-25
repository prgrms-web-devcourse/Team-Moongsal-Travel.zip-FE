import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, SwipeableDrawer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { filterFormDefault } from '@/constants/defaultFormValue';
import useFilterForm from '@/hooks/search/useFilterForm';
import { horizontalCenterstyle, swipeStyle } from '@/styles/commonStyle';
import { FilterFormType, FilterProps } from '@/types/search';

import { FilterMenu, FilterRadio } from '.';

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

  const handleApply = async ({
    minDays,
    maxDays,
    minCost,
    maxCost,
    sort,
  }: FilterFormType) => {
    setFilter({ minDays, maxDays, minCost, maxCost, sort });
    setOpen(false);
  };

  return (
    <Box sx={{ ...horizontalCenterstyle, minWidth: '100px' }}>
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
          <FilterRadio sort={sort} />
          <FilterMenu
            subTitle='여행 경비'
            minState={minCost}
            maxState={maxCost}
            minValue={0}
            maxValue={5000000}
            steps={100000}
          />
          <FilterMenu
            subTitle='여행 기간'
            minState={minDays}
            maxState={maxDays}
            minValue={0}
            maxValue={30}
            steps={1}
          />
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
