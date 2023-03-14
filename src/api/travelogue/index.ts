import { AxiosResponse } from 'axios';

import { baseRequest } from '@/api/core';
import http from '@/api/core/axiosInstance';
import { TRAVELOGUE_API_ROUTER } from '@/constants/path';
import { FilterAxiosProps } from '@/types/filter';
import {
  BaseTravelogueParamsType,
  TravelogueFeedType,
  TravelogueListType,
} from '@/types/travelogue';

export const getTypeOfTravelogues = async ({
  page,
  size,
  type,
  sortedType,
}: BaseTravelogueParamsType): Promise<TravelogueFeedType[]> => {
  const response = await http.get<TravelogueListType>(
    `${TRAVELOGUE_API_ROUTER[type]}?page=${page}&size=${size}${
      sortedType ? `&sort=${sortedType}` : ''
    }`,
  );

  return response.data.content;
};

export const getPersonalTravelogues = async (size: number, page: number) => {
  return await http.get<TravelogueListType>(`api/travelogues?&page=${page}&=${size}`);
};

// 현재 사용하지 않음: 리팩터링시 사용할 수 있을것같아서 남겨두겠습니다.
export const getTravelogueListByKeyword = async (
  keyword = "''",
  page = 0,
  size = 5,
): Promise<AxiosResponse<TravelogueListType>> => {
  keyword === '' ? (keyword = "''") : keyword;
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search?keyword=${keyword}&page=${page}&size=${size}`,
  });

  return response;
};

export const getTravelogueListByFilter = async ({
  keyword,
  page = 0,
  size = 5,
  minDays,
  maxDays,
  minCost,
  maxCost,
  sort,
}: FilterAxiosProps) => {
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search/filters?keyword=${keyword}&page=${page}&size=${size}
    ${minDays ? `&minDays=${minDays}` : ''} ${maxDays ? `&maxDays=${maxDays}` : ''}
    ${minCost ? `&minCost=${minCost}` : ''} ${maxCost ? `&maxCost=${maxCost}` : ''}
    ${sort === 'popular' ? `&sort=${sort}` : ''}
    `,
  });
  return response;
};

export const patchTravelogueDetailById = async ({
  travelogueId,
}: {
  travelogueId: string;
}) => {
  const response = await http.patch(`/api/travelogues/${travelogueId}`);
  return response;
};
