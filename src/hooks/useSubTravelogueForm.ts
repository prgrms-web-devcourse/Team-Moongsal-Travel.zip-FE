import { Control, useController } from 'react-hook-form';

import { SubTravelogueFormType } from '@/types/post';

const useSubTravelogueForm = (control: Control<SubTravelogueFormType>) => {
  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
    rules: { required: true },
  });

  const { field: content, fieldState: contentState } = useController({
    name: 'content',
    control,
    rules: { required: true },
  });

  return {
    title,
    titleState,
    content,
    contentState,
  };
};

export default useSubTravelogueForm;
