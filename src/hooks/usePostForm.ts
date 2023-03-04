import { Control, useController } from 'react-hook-form';

import { TravelogueFormType } from '@/types/post';

const usePostForm = (control: Control<TravelogueFormType>) => {
  const { field: countryName, fieldState: countryNameState } = useController({
    name: 'country.name',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
    },
  });

  const { field: costTotal, fieldState: costTotalState } = useController({
    name: 'cost.total',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
    },
  });

  const { field: startDate, fieldState: startDateState } = useController({
    name: 'period.startDate',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
    },
  });

  const { field: endDate, fieldState: endDateState } = useController({
    name: 'period.endDate',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
    },
  });

  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
    },
  });

  const { field: thumbnail, fieldState: thumbnailState } = useController({
    name: 'thumbnail',
    control,
    rules: {
      required: '필수 입력 사항입니다.',
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
