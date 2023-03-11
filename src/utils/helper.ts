import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};

export const createPeriodArray = (days: number) => {
  return Array.from({ length: days }, (_, i) => `${i + 1}일차`);
};
