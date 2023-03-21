import { Box, FormHelperText, OutlinedInput, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { MouseEvent, useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { FileInput, SubTitle, Title } from '@/components/common';
import { CountrySelect } from '@/components/common';
import useTravelogueForm from '@/hooks/travelogue/useTravelogueForm';
import { inputStyle } from '@/styles/commonStyle';
import { TravelogueFormType, TravelogueResponseType } from '@/types/travelogue';

import { ComplexButton, DatePicker } from '.';

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
      <Title bold='bold' sx={{ mb: '5px' }}>
        여행 기본 정보를 입력하세요
      </Title>
      <Stack sx={marginBottom}>
        <SubTitle sx={{ mb: '5px' }}>여행 유형</SubTitle>
        <ComplexButton value={toggleValue} onChange={onChange} />
        {toggleValue && (
          <>
            <SubTitle>방문한 나라</SubTitle>
            <CountrySelect name={countryName} isKorea={toggleValue === '국내'} />
          </>
        )}
        {countryNameState.error && (
          <FormHelperText sx={HelperTextColor}>
            {countryNameState.error.message}
          </FormHelperText>
        )}
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle sx={{ mb: '5px' }}>여행 기간</SubTitle>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <DatePicker
            control={startDate}
            maxDate={dayjs(endDate.value)}
            text='시작날짜'
            isEditPage={isEditPage}
          />
          <DatePicker control={endDate} text='종료날짜' isEditPage={isEditPage} />
        </Box>
        {(startDateState.error || endDateState.error) && (
          <FormHelperText sx={HelperTextColor}>
            {(startDateState.error && startDateState.error.message) ||
              (endDateState.error && endDateState.error.message)}
          </FormHelperText>
        )}
      </Stack>
      <Stack sx={{ mb: '1.5rem' }}>
        <SubTitle sx={{ mb: '5px' }}>총 경비</SubTitle>
        <Box>
          <OutlinedInput
            {...costTotal}
            fullWidth
            placeholder='이번 여행의 총 경비를 입력하세요'
            type='text'
            sx={inputStyle}
          />
          {costTotalState.error && (
            <FormHelperText sx={HelperTextColor}>
              {costTotalState.error.message}
            </FormHelperText>
          )}
        </Box>
      </Stack>
      <Title bold='bold' sx={{ mb: '5px' }}>
        여행 일기를 작성하세요{' '}
      </Title>
      <Stack sx={marginBottom}>
        <SubTitle sx={{ mb: '5px' }}>제목</SubTitle>
        <OutlinedInput
          {...title}
          fullWidth
          placeholder='제목을 입력하세요'
          type='text'
          sx={inputStyle}
        />
        {titleState.error && (
          <FormHelperText sx={HelperTextColor}>{titleState.error.message}</FormHelperText>
        )}
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle sx={{ mb: '5px' }}>썸네일</SubTitle>
        <Controller
          render={({ field: thumbnail, fieldState: thumbnailState }) => (
            <>
              <FileInput thumbnail={thumbnail} imageUrl={data?.thumbnail} />
              {thumbnailState.error && (
                <FormHelperText sx={HelperTextColor}>
                  {thumbnailState.error.message}
                </FormHelperText>
              )}
            </>
          )}
          name={`thumbnail`}
          control={control}
          rules={{ required: isEditPage ? false : '썸네일은 필수 입력 사항입니다.' }}
        />
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
