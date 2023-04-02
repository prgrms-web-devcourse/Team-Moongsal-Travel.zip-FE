import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { SwipeableDrawer } from '@/components/common/SwipeDrawer';
import { filterFormDefault } from '@/constants/defaultFormValue';
import useFilterForm from '@/hooks/search/useFilterForm';
import { horizontalCenterstyle } from '@/styles/commonStyle';
import { FilterFormType, FilterProps } from '@/types/search';

import { FilterMenu, FilterRadio } from '.';

interface FilterButtonProps {
  setFilter: Dispatch<SetStateAction<FilterProps>>;
}

const FilterButton = ({ setFilter }: FilterButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, reset } = useForm<FilterFormType>(filterFormDefault);
  const { minDays, maxDays, minCost, maxCost, keyword, sort } = useFilterForm(control);

  useEffect(() => {
    router.isReady && keyword.onChange(router.query.keyword);
  }, [router.isReady, router.query.keyword, keyword]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleReset = () => {
    reset({ minDays: '', maxDays: '', minCost: '', maxCost: '', sort: 'recent' });
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
      <SwipeableDrawer open={open} toggleDrawer={toggleDrawer}>
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Button onClick={handleReset}>초기화</Button>
            <Box>
              <Button onClick={toggleDrawer(false)}>취소</Button>
              <Button type='submit'>적용</Button>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default FilterButton;
