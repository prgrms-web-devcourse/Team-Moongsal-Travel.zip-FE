import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import { SubTitle, Title } from '@/components/common';

import { ComplexButton, DatePicker, Location } from './';

const PostBasic = () => {
  // api 연결시 커스텀 훅으로 분리 예정
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(''));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(''));

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };
  return (
    <>
      <Title>여행 기본 정보를 입력해주세요</Title>
      <Stack sx={marginBottom}>
        <SubTitle>여행 유형</SubTitle>
        <ComplexButton />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 지역</SubTitle>
        <Location />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>여행 기간</SubTitle>
        <Box
          sx={{
            ...marginBottom,
            display: 'flex',
            gap: 2,
          }}>
          <DatePicker
            value={startDate}
            onChange={handleStartDateChange}
            text='시작날짜'
          />
          <DatePicker value={endDate} onChange={handleEndDateChange} text='종료날짜' />
        </Box>
      </Stack>
      <Stack>
        <SubTitle>총 경비</SubTitle>
        <Box sx={marginBottom}>
          <TextField fullWidth label='이번 여행의 총 경비를 입력하세요' type='text' />
        </Box>
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            작성
          </Typography>
          {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
        </Button>
      </Box>
    </>
  );
};

export default PostBasic;

const marginBottom = {
  marginBottom: '1rem',
};
