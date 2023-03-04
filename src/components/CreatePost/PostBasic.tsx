import { Box, FormHelperText, OutlinedInput, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { MouseEvent, useState } from 'react';
import { Control } from 'react-hook-form';

import { FileInput, SubTitle, Title } from '@/components/common';
import { CountrySelect } from '@/components/common';
import usePostForm from '@/hooks/useTravelogueForm';
import { CreatePost } from '@/types/post';

import { ComplexButton, DatePicker } from './';

interface ControlProps {
  control: Control<CreatePost>;
}

const PostBasic = ({ control }: ControlProps) => {
  const [toggleValue, setToggleValue] = useState('');

  const handleChange = (e: MouseEvent<HTMLElement>, selectedValue: string) => {
    setToggleValue(selectedValue);
  };

  const {
    countryName,
    countryNameState,
    costTotal,
    costTotalState,
    startDate,
    startDateState,
    endDate,
    endDateState,
    title,
    titleState,
    thumbnail,
    thumbnailState,
  } = usePostForm(control);

  return (
    <>
      <Title bold='bold'>여행 기본 정보를 입력하세요</Title>
      <Stack sx={marginBottom}>
        <SubTitle>여행 유형</SubTitle>
        <ComplexButton value={toggleValue} handleChange={handleChange} />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>방문한 나라</SubTitle>
        <CountrySelect name={countryName} isSelected={toggleValue === '국내'} />
        {countryNameState.error && (
          <FormHelperText sx={HelperTextColor}>
            {countryNameState.error.message}
          </FormHelperText>
        )}
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>여행 기간</SubTitle>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <DatePicker
            control={startDate}
            maxDate={dayjs(endDate.value)}
            text='시작날짜'
          />
          <DatePicker control={endDate} text='종료날짜' />
        </Box>
        {(startDateState.error || endDateState.error) && (
          <FormHelperText sx={HelperTextColor}>
            {(startDateState.error && startDateState.error.message) ||
              (endDateState.error && endDateState.error.message)}
          </FormHelperText>
        )}
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>총 경비</SubTitle>
        <Box>
          <OutlinedInput
            {...costTotal}
            fullWidth
            placeholder='이번 여행의 총 경비를 입력하세요'
            type='text'
          />
          {costTotalState.error && (
            <FormHelperText sx={HelperTextColor}>
              {costTotalState.error.message}
            </FormHelperText>
          )}
        </Box>
      </Stack>

      <Title bold='bold'>여행 일기를 작성하세요 </Title>
      <Stack sx={marginBottom}>
        <SubTitle>제목</SubTitle>
        <OutlinedInput {...title} fullWidth placeholder='제목을 입력하세요' type='text' />
        {titleState.error && (
          <FormHelperText sx={HelperTextColor}>{titleState.error.message}</FormHelperText>
        )}
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>썸네일</SubTitle>
        <FileInput thumbnail={thumbnail} />
        {thumbnailState.error && (
          <FormHelperText sx={HelperTextColor}>
            {thumbnailState.error.message}
          </FormHelperText>
        )}
      </Stack>
    </>
  );
};

export default PostBasic;

const marginBottom = {
  marginBottom: '1rem',
};

const HelperTextColor = {
  color: 'red.main',
};
