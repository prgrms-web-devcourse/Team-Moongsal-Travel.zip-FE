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
    rules: {
      validate: (value) => {
        if (maxDays.value && !value) {
          return '최소 기간을 입력하세요';
        }
        if (maxDays.value && value && parseInt(value) > parseInt(maxDays.value)) {
          return '최소 기간은 최대 기간보다 클 수 없습니다.';
        }
        return true;
      },
    },
  });
  const { field: maxDays, fieldState: maxDaysState } = useController({
    name: 'maxDays',
    control,
    rules: {
      validate: (value) => {
        if (minDays.value && !value) {
          return '최대 기간을 입력하세요';
        }
        return true;
      },
    },
  });
  const { field: minCost, fieldState: minCostState } = useController({
    name: 'minCost',
    control,
    rules: {
      validate: (value) => {
        if (maxCost.value && !value) {
          return '최소 비용을 입력하세요';
        }
        if (maxCost.value && value && parseInt(value) > parseInt(maxCost.value)) {
          return '최소 비용은 최대 비용보다 클 수 없습니다.';
        }
        return true;
      },
    },
  });
  const { field: maxCost, fieldState: maxCostState } = useController({
    name: 'maxCost',
    control,
    rules: {
      validate: (value) => {
        if (minCost.value && !value) {
          return '최대 비용을 입력하세요';
        }
        return true;
      },
    },
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
