import axios from 'axios';

import { baseRequest } from '@/api/core';
import { TravelogueParams, TravelogueResponse } from '@/mocks/handlers/travelogue';
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
  keyword = '',
): Promise<TravelogueListType> => {
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search?keyword=${keyword}`,
  });

  return response.data;
};
