import { Control, useController } from 'react-hook-form';

import { ScrapDocsFormType } from '@/types/scrap';

const useScrapDocsForm = (control: Control<ScrapDocsFormType>) => {
  const { field: title, fieldState: titleState } = useController({
    name: 'title',
    control,
    rules: {
      required: '제목을 입력하세요',
    },
  });

  return {
    title,
    titleState,
  };
};

export default useScrapDocsForm;
