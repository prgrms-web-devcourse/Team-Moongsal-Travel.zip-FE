import { Control, useController } from 'react-hook-form';

import { SubTravelogueFormType } from '@/types/post';

const useSubTravelogueForm = (control: Control<SubTravelogueFormType>) => {
  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
  });

  const { field: content, fieldState: contentState } = useController({
    name: 'content',
    control,
  });

  return {
    title,
    titleState,
    content,
    contentState,
  };
};

export default useSubTravelogueForm;
