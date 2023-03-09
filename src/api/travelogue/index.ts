import { AxiosResponse } from 'axios';

import { baseRequest } from '@/api/core';
import http from '@/api/core/axiosInstance';
import { TravelogueFeedType, TravelogueListType } from '@/types/travelogue';

export const getRecentTravelogueList = async (
  page = 1,
): Promise<TravelogueFeedType[]> => {
  const response = await http.get(`api/travelogues?&page=${page}`);

  return response.data.content;
};

export const getPersonalTravelogues = async () => {
  return await http.get<TravelogueFeedType>('/travelogues');
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

export const patchTravelogueDetailById = async ({
  travelogueId,
}: {
  travelogueId: string;
}) => {
  const response = await http.patch(`/api/travelogues/${travelogueId}`);
  return response;
};
