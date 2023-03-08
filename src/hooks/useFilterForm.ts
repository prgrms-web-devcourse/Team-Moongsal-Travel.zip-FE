import { Control, useController } from 'react-hook-form';

import { FilterFormType } from '@/types/filter';

const useFilterForm = (control: Control<FilterFormType>) => {
  const { field: keyword, fieldState: keywordState } = useController({
    name: 'keyword',
    control,
  });
  const { field: minDays, fieldState: minDaysState } = useController({
    name: 'minDays',
    control,
  });
  const { field: maxDays, fieldState: maxDaysState } = useController({
    name: 'maxDays',
    control,
  });
  const { field: minCost, fieldState: minCostState } = useController({
    name: 'minCost',
    control,
  });
  const { field: maxCost, fieldState: maxCostState } = useController({
    name: 'maxCost',
    control,
  });

  return {
    keyword,
    keywordState,
    minDays,
    minDaysState,
    maxDays,
    maxDaysState,
    minCost,
    minCostState,
    maxCost,
    maxCostState,
  };
};

export default useFilterForm;
