import { Global } from '@emotion/react';
import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, Stack, SwipeableDrawer, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { getTravelogueListByFilter } from '@/api/travelogue';
import { SubTitle } from '@/components/common';
import { filterFormDefault } from '@/constants/defaultFormValue';
import useFilterForm from '@/hooks/useFilterForm';
import { FilterFormType } from '@/types/filter';
import { TravelogueFeedType } from '@/types/travelogue';

interface FilterButtonProps {
  setTravelogues: Dispatch<SetStateAction<TravelogueFeedType[]>>;
}

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.gray030.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const FilterButton = ({ setTravelogues }: FilterButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { handleSubmit, control } = useForm<FilterFormType>(filterFormDefault);
  const { minDays, maxDays, minCost, maxCost, keyword } = useFilterForm(control);

  useEffect(() => {
    router.isReady && keyword.onChange(router.query.keyword);
  }, [router.isReady, router.query.keyword, keyword]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleApply = async (data: FilterFormType) => {
    const response = await getTravelogueListByFilter({ ...data });
    setOpen(false);
    console.log(response.data.content);
    setTravelogues(response.data.content);
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
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            boxSizing: 'border-box',
            minWidth: '390px',
            maxWidth: '414px',
            margin: 'auto',
            overflow: 'visible',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}
      />
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
        ModalProps={{
          keepMounted: false,
        }}>
        <Puller />
        <Box sx={{ pb: 2 }} />
        <Box component='form' onSubmit={handleSubmit(handleApply)}>
          <Box>
            <SubTitle>정렬</SubTitle>
            <Stack flexDirection='row'>
              <Button variant='outlined' type='button'>
                최신순
              </Button>
              <Button variant='outlined' type='button'>
                인기순
              </Button>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubTitle>여행 경비</SubTitle>
            <Stack flexDirection='row'>
              <TextField {...minCost} placeholder='최소금액' type='number' />
              <TextField {...maxCost} placeholder='최대금액' type='number' />
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <SubTitle>여행 기간</SubTitle>
            <Stack flexDirection='row'>
              <TextField {...minDays} placeholder='최소기간' type='number' />
              <TextField {...maxDays} placeholder='최대기간' type='number' />
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
