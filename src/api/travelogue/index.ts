import { baseRequest } from '@/api/core';
import { TravelogueFeedType } from '@/types/travelogue';

export const getRecentTravelogueList = async (
  page = 1,
): Promise<TravelogueFeedType[]> => {
  const response = await baseRequest({
    method: 'GET',
    url: `api/travelogues?&page=${page}`,
  });

  return response.data.content;
};
