import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};

export const createPeriodArray = (days: string) => {
  return Array.from({ length: parseInt(days) }, (_, i) => `${i + 1}일차`);
};
