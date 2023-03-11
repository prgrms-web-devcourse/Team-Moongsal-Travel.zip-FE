import { Box, FormHelperText, OutlinedInput, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { MouseEvent, useEffect, useState } from 'react';
import { Control } from 'react-hook-form';

import { FileInput, SubTitle, Title } from '@/components/common';
import { CountrySelect } from '@/components/common';
import useTravelogueForm from '@/hooks/useTravelogueForm';
import { TravelogueFormType, TravelogueResponseType } from '@/types/post';

import { ComplexButton, DatePicker } from './';

interface PostBasicProps {
  control: Control<TravelogueFormType>;
  data?: TravelogueResponseType;
  isEditPage: boolean;
}

const PostBasic = ({ control, data, isEditPage }: PostBasicProps) => {
  const [toggleValue, setToggleValue] = useState('');
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
  } = useTravelogueForm(control);

  const onChange = (e: MouseEvent<HTMLElement>, selectedValue: string) => {
    setToggleValue(selectedValue);
  };

  useEffect(() => {
    if (data) {
      setToggleValue(data.country.name === '대한민국' ? '국내' : '해외');
    }
  }, [data]);

  if (isEditPage && !data) return <></>;

  return (
    <>
      <Title bold='bold'>여행 기본 정보를 입력하세요</Title>
      <Stack sx={marginBottom}>
        <SubTitle>여행 유형</SubTitle>
        <ComplexButton value={toggleValue} onChange={onChange} />
        {toggleValue && (
          <>
            <SubTitle>방문한 나라</SubTitle>
            <CountrySelect
              name={countryName}
              isKorea={toggleValue === '국내'}
              selectedCountry={data?.country.name}
            />
          </>
        )}
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
            selectedDate={data?.period.startDate}
          />
          <DatePicker
            control={endDate}
            text='종료날짜'
            selectedDate={data?.period.endDate}
          />
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
            ref={costTotal.ref}
            onChange={costTotal.onChange}
            fullWidth
            placeholder='이번 여행의 총 경비를 입력하세요'
            type='text'
            defaultValue={data?.cost.total}
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
        <OutlinedInput
          ref={title.ref}
          onChange={title.onChange}
          fullWidth
          placeholder='제목을 입력하세요'
          type='text'
          defaultValue={data?.title}
        />
        {titleState.error && (
          <FormHelperText sx={HelperTextColor}>{titleState.error.message}</FormHelperText>
        )}
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>썸네일</SubTitle>
        <FileInput thumbnail={thumbnail} imageUrl={data?.thumbnail} />
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
