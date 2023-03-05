import { Box, OutlinedInput, Stack } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { Control } from 'react-hook-form';

import { FileInput, SubTitle, Title } from '@/components/common';
import usePostForm from '@/hooks/usePostForm';
import { TravelogueFormType } from '@/types/post';

import { ComplexButton, DatePicker, Location } from './';

interface ControlProps {
  control: Control<TravelogueFormType>;
}

const PostBasic = ({ control }: ControlProps) => {
  const [toggleValue, setToggleValue] = useState('');

  const handleChange = (e: MouseEvent<HTMLElement>, selectedValue: string) => {
    setToggleValue(selectedValue);
  };

  const { countryName, costTotal, startDate, endDate, title, thumbnail } =
    usePostForm(control);
  return (
    <>
      <Title bold='bold'>여행 기본 정보를 입력하세요</Title>
      <Stack sx={marginBottom}>
        <SubTitle>여행 유형</SubTitle>
        <ComplexButton value={toggleValue} handleChange={handleChange} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 나라</SubTitle>
        <Location name={countryName} readonly={toggleValue === '국내'} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>여행 기간</SubTitle>
        <Box sx={{ ...marginBottom, display: 'flex', gap: 1 }}>
          <DatePicker control={startDate} text='시작날짜' />
          <DatePicker control={endDate} text='종료날짜' />
        </Box>
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>총 경비</SubTitle>
        <Box>
          <OutlinedInput
            {...costTotal}
            fullWidth
            placeholder='이번 여행의 총 경비를 입력하세요'
            type='number'
          />
        </Box>
      </Stack>
      <Title bold='bold'>여행 일기를 작성하세요 </Title>
      <Stack sx={marginBottom}>
        <SubTitle>제목</SubTitle>
        <OutlinedInput {...title} fullWidth placeholder='제목을 입력하세요' type='text' />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>썸네일</SubTitle>
        <FileInput thumbnail={thumbnail} />
      </Stack>
    </>
  );
};

export default PostBasic;

const marginBottom = {
  marginBottom: '1rem',
};
