import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, Dialog, Popover, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getTravelogueListByFilter } from '@/api/travelogue';
import { SubTitle } from '@/components/common';
import { filterFormDefault } from '@/constants/defaultFormValue';
import useFilterForm from '@/hooks/useFilterForm';
import { FilterFormType } from '@/types/filter';

const FilterButton = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { handleSubmit, control } = useForm<FilterFormType>(filterFormDefault);
  const { minDays, maxDays, minCost, maxCost, keyword } = useFilterForm(control);

  useEffect(() => {
    router.isReady && keyword.onChange(router.query.keyword);
  }, [router.isReady, router.query.keyword, keyword]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = async (data: FilterFormType) => {
    const response = await getTravelogueListByFilter({ ...data });
    handleClose();
    console.log(response.data);
  };

  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '2rem',
        maxWidth: '90%',
        margin: '2rem auto',
      }}>
      <Button variant='outlined' startIcon={<TuneIcon />} onClick={handleClick}>
        필터
      </Button>
      <Dialog open={open}>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <Box width={300} height={400} overflow='hidden'>
            <Box component='form' onSubmit={handleSubmit(handleApply)}>
              <Box>
                <SubTitle>정렬</SubTitle>
                <Button variant='outlined' type='button'>
                  최신순
                </Button>
                <Button variant='outlined' type='button'>
                  인기순
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <SubTitle>여행 경비</SubTitle>
                <TextField {...minCost} placeholder='최소금액' />
                <TextField {...maxCost} placeholder='최대금액' />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <SubTitle>여행 기간</SubTitle>
                <TextField {...minDays} placeholder='최소기간' />
                <TextField {...maxDays} placeholder='최대기간' />
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type='submit'>적용</Button>
              </Box>
            </Box>
          </Box>
        </Popover>
      </Dialog>
    </Box>
  );
};

export default FilterButton;
