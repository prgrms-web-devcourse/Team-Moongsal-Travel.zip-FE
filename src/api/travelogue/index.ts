import axios, { AxiosResponse } from 'axios';

import { baseRequest } from '@/api/core';
import { TravelogueParams, TravelogueResponse } from '@/mocks/handlers/travelogue';
import { FilterAxiosProps } from '@/types/filter';
import { TravelogueFeedType, TravelogueListType } from '@/types/travelogue';

export const getRecentTravelogueList = async (
  page = 1,
): Promise<TravelogueFeedType[]> => {
  const response = await baseRequest({
    method: 'GET',
    url: `api/travelogues?&page=${page}`,
  });

  return response.data.content;
};

export const getPersonalTravelogues = async (params: TravelogueParams) => {
  return await axios.get<TravelogueResponse<TravelogueFeedType>>('/travelogues', {
    params,
  });
};

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
}: FilterAxiosProps) => {
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search/filters?keyword=${keyword}&page=${page}&size=${size}
    ${minDays ? `&minDays=${minDays}` : ''} ${maxDays ? `&maxDays=${maxDays}` : ''}
    ${minCost ? `&minCost=${minCost}` : ''} ${maxCost ? `&maxCost=${maxCost}` : ''}
    `,
  });

  return response;
};
