import axios, { AxiosResponse } from 'axios';

import http from '@/api/core/axiosInstance';
import { TravelogueParams, TravelogueResponse } from '@/mocks/handlers/travelogue';
import { TravelogueFeedType, TravelogueListType } from '@/types/travelogue';

export const getRecentTravelogueList = async (
  page = 1,
): Promise<TravelogueFeedType[]> => {
  const response = await http.get(`api/travelogues?&page=${page}`);

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
