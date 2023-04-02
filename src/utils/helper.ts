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

export const getTextBySubTitle = (
  subTitle: '여행 기간' | '여행 경비',
  minValue: string,
  maxValue: string,
) => {
  if (subTitle === '여행 기간') {
    return {
      minPlaceholder: '최소기간',
      maxPlaceholder: '최대기간',
      helperText: `최소:${minValue}일 - 최대:${maxValue}일`,
    };
  }
  return {
    minPlaceholder: '최소비용',
    maxPlaceholder: '최대비용',
    helperText: `
      최소:${parseInt(minValue).toLocaleString('ko-KR')}원 - 
      최대:${parseInt(maxValue).toLocaleString('ko-KR')}원
      `,
  };
};
