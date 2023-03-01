import { Control, useController } from 'react-hook-form';

import { CreatePost } from '@/types/CreatePost';

const usePostForm = (control: Control<CreatePost>) => {
  const { field: countryName, fieldState: countryNameState } = useController({
    name: 'country.name',
    control,
    rules: {
      required: '필수입력',
    },
  });

  const { field: costTotal, fieldState: costTotalState } = useController({
    name: 'cost.total',
    control,
  });

  const { field: startDate, fieldState: startDateState } = useController({
    name: 'period.startDate',
    control,
  });

  const { field: endDate, fieldState: endDateState } = useController({
    name: 'period.endDate',
    control,
  });

  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
  });

  const { field: thumbnail, fieldState: thumbnailState } = useController({
    name: 'thumbnail',
    control,
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
