import axios from 'axios';

import http from '@/api/core/axiosInstance';
import { TravelogueParams, TravelogueResponse } from '@/mocks/handlers/travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

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
