import { Box, OutlinedInput, Stack } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { MouseEvent, useState } from 'react';

import { SubTitle, Title } from '@/components/common';

import { ComplexButton, DatePicker, Location } from './';

const PostBasic = () => {
  // api 연결시 커스텀 훅으로 분리 예정
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(''));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(''));
  const [toggleValue, setToggleValue] = useState('');

  const handleChange = (e: MouseEvent<HTMLElement>, selectedValue: string) => {
    setToggleValue(selectedValue);
  };

  const handleStartDateChange = (newValue: Dayjs | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Dayjs | null) => {
    setEndDate(newValue);
  };

  return (
    <>
      <Title bold='bold'>여행 기본 정보를 입력하세요</Title>
      <Stack sx={marginBottom}>
        <SubTitle>여행 유형</SubTitle>
        <ComplexButton value={toggleValue} handleChange={handleChange} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 나라</SubTitle>
        <Location readonly={toggleValue === '국내' && true} />
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
      <Stack sx={marginBottom}>
        <SubTitle>총 경비</SubTitle>
        <Box>
          <OutlinedInput
            fullWidth
            placeholder='이번 여행의 총 경비를 입력하세요'
            type='text'
          />
        </Box>
      </Stack>
      <Title bold='bold'>여행 일기를 작성하세요 </Title>
      <Stack sx={marginBottom}>
        <SubTitle>제목</SubTitle>
        <OutlinedInput fullWidth placeholder='제목을 입력하세요' type='text' />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>썸네일</SubTitle>
        <OutlinedInput fullWidth type='file' />
      </Stack>
    </>
  );
};

export default PostBasic;

const marginBottom = {
  marginBottom: '1rem',
};
