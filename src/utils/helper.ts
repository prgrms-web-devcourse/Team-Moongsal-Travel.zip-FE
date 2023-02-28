import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => ({
  year: date.get('year'),
  month: date.get('month') + 1,
  day: date.get('date'),
});
