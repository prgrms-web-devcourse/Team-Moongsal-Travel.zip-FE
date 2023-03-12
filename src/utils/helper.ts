import { Dayjs } from 'dayjs';

import { PATH_ROUTER } from '@/constants/path';
import { PathRouterType } from '@/types/common';

export const getDateInfo = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};

export const createPeriodArray = (days: number) => {
  return Array.from({ length: days }, (_, i) => `${i + 1}일차`);
};

export const getInitialPathName = (pathname: PathRouterType) =>
  Object.entries(PATH_ROUTER)
    .filter((pathInformationArray) => {
      return pathname === pathInformationArray[1];
    })
    .flat()[0] as PathRouterType;
