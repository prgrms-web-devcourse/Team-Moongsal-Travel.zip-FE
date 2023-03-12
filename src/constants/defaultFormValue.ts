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

export const subTravelogueFormDefault = {
  title: '',
  content: '',
  day: 1,
  addresses: [{ region: '' }],
  transportationSet: [],
  travelPhotoCreateReqs: [{ url: 'https://temp.com' }],
};

export const filterFormDefault: UseFormProps = {
  mode: 'onChange',
  defaultValues: {
    keyword: '',
    minDays: '',
    maxDays: '',
    minCost: '',
    maxCost: '',
    sort: 'recent',
  },
};

export const scrapFormDefault: UseFormProps = {
  mode: 'onChange',
  defaultValues: {
    title: '',
  },
};
