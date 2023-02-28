import { Control, useController } from 'react-hook-form';

import { CreatePostForm } from '@/api/createPost/type';

const usePostForm = (control: Control<CreatePostForm>) => {
  const { field: total, fieldState: totalState } = useController({
    name: 'total',
    control,
  });

  const { field: name, fieldState: nameState } = useController({
    name: 'name',
    control,
  });

  const { field: startDate, fieldState: startDateState } = useController({
    name: 'startDate',
    control,
  });

  const { field: endDate, fieldState: endDateState } = useController({
    name: 'endDate',
    control,
  });

  const { field: thumbnail, fieldState: thumbnailState } = useController({
    name: 'thumbnail',
    control,
  });

  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
  });

  return {
    total,
    totalState,
    name,
    nameState,
    startDate,
    startDateState,
    endDate,
    endDateState,
    thumbnail,
    thumbnailState,
    title,
    titleState,
  };
};

export default usePostForm;
