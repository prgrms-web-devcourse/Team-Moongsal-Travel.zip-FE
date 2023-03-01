import { baseRequest } from '@/api/core';
import { TravelogueFeed } from '@/types/travelogue';

export const getRecentTravelogueList = async (page = 1): Promise<TravelogueFeed[]> => {
  const response = await baseRequest({
    method: 'GET',
    url: `api/travelogues?&page=${page}`,
  });

  return response.data.content;
};
