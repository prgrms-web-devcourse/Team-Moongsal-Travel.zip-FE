import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};
