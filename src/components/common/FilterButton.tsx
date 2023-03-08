import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, Dialog, Popover } from '@mui/material';
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
          <Box width={250} height={300}>
            <Box component='form' onSubmit={handleSubmit(handleApply)}>
              <Box>
                <SubTitle>정렬</SubTitle>
                <button type='button'>최신순</button>
                <button type='button'>인기순</button>
              </Box>
              <Box>
                <SubTitle>여행 경비</SubTitle>
                <input {...minCost} placeholder='최소금액' />
                <input {...maxCost} placeholder='최대금액' />
              </Box>
              <Box>
                <SubTitle>여행 기간</SubTitle>
                <input {...minDays} placeholder='최소기간' />
                <input {...maxDays} placeholder='최대기간' />
              </Box>
              <button type='submit'>적용</button>
            </Box>
          </Box>
        </Popover>
      </Dialog>
    </Box>
  );
};

export default FilterButton;
