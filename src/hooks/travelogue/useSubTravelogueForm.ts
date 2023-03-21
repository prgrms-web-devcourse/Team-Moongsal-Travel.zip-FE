import { Control, useController } from 'react-hook-form';

import { SubTravelogueType } from '@/types/travelogue';

const useSubTravelogueForm = (control: Control<SubTravelogueType>) => {
  const { field: title } = useController({
    name: 'title',
    control,
    rules: { required: true },
  });

  const { field: content } = useController({
    name: 'content',
    control,
    rules: { required: true },
  });

  const { field: transportationSet } = useController({
    name: 'transportationSet',
    control,
    rules: { required: true },
  });

  return {
    title,
    content,
    transportationSet,
  };
};

export default useSubTravelogueForm;
