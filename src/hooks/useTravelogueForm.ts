import { Control, useController } from 'react-hook-form';

import { CreatePost } from '@/types/post';

const usePostForm = (control: Control<CreatePost>) => {
  const { field: countryName, fieldState: countryNameState } = useController({
    name: 'country.name',
    control,
    rules: {
      required: '방문 나라는 필수 입력 사항입니다.',
      pattern: {
        value: /^[가-힣]+$/,
        message: '한글로 입력해주세요.',
      },
    },
  });

  const { field: costTotal, fieldState: costTotalState } = useController({
    name: 'cost.total',
    control,
    rules: {
      required: '비용은 필수 입력 사항입니다.',
      pattern: {
        value: /^[0-9]+$/,
        message: '비용은 숫자만 입력가능합니다.',
      },
    },
  });

  const { field: startDate, fieldState: startDateState } = useController({
    name: 'period.startDate',
    control,
    rules: {
      required: '여행기간은 필수 입력 사항입니다.',
    },
  });

  const { field: endDate, fieldState: endDateState } = useController({
    name: 'period.endDate',
    control,
    rules: {
      required: '여행기간은 필수 입력 사항입니다.',
    },
  });

  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
    rules: {
      required: '제목은 필수 입력 사항입니다.',
    },
  });

  const { field: thumbnail, fieldState: thumbnailState } = useController({
    name: 'thumbnail',
    control,
    rules: {
      required: '썸네일은 필수 입력 사항입니다.',
    },
  });

  return {
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
  };
};

export default usePostForm;
