import { DeepPartial, FieldValues, Mode } from 'react-hook-form';

export interface UseFormProps {
  mode?: Mode;
  defaultValues?: DeepPartial<FieldValues>;
}

export const travelogueFormProps: UseFormProps = {
  mode: 'onChange',
  defaultValues: {
    country: {
      name: '',
    },
    period: { startDate: '', endDate: '' },
    cost: {
      transportation: '',
      lodge: '',
      etc: '',
      total: '',
    },
    title: '',
    thumbnail: null,
  },
};

export const subTravelogueFormProps: UseFormProps = {
  defaultValues: {
    title: '',
    content: '',
    addresses: [{ region: '' }],
  },
};
