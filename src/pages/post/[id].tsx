// import { useRouter } from 'next/router';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import ComplexButton from '@/components/CreatePost/ComplexButton';
import DatePicker from '@/components/CreatePost/DatePicker';
import SubTitle from '@/components/CreatePost/SubTitle';
import Title from '@/components/CreatePost/Titlte';

const Post = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(''));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(''));

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };
  return (
    <Box sx={{ padding: '0 24px' }}>
      <Stack spacing={2}>
        <Title>여행 기본 정보를 입력해주세요</Title>
        <Stack>
          <SubTitle>여행 유형</SubTitle>
          <ComplexButton />
        </Stack>
        <Stack spacing={1}>
          <SubTitle>방문한 지역</SubTitle>
          <Box sx={locationBoxStyle}>
            <TextField fullWidth label='지역을 입력하세요' type='text' />
            <IconButton sx={{ position: 'absolute', right: 0, top: '0.5rem' }}>
              <LocationOnOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <SubTitle>여행 기간</SubTitle>
          <Box sx={{ ...locationBoxStyle, flexDirection: 'row', gap: 2 }}>
            <DatePicker
              value={startDate}
              onChange={handleStartDateChange}
              text='시작날짜'
            />
            <DatePicker value={endDate} onChange={handleEndDateChange} text='종료날짜' />
          </Box>
        </Stack>
        <Stack spacing={1}>
          <SubTitle>총 경비</SubTitle>
          <Box sx={locationBoxStyle}>
            <TextField fullWidth label='이번 여행의 총 경비를 입력하세요' type='text' />
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            작성
          </Typography>
          {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
        </Button>
      </Box>
    </Box>
  );
};

export default Post;

const locationBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '15px',
  position: 'relative',
};
