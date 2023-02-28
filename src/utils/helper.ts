import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => {
  return `${date.get('year')}-${date.get('month') + 1}-${date.get('date')}`;
};
