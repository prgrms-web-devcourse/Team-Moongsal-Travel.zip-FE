import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getRecentTravelogueList } from '@/api/travelogue';
import { TravelogueFeed } from '@/types/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery<TravelogueFeed[], AxiosError>({
    queryKey: ['RecentTravelogueData'],
    queryFn: () => getRecentTravelogueList(),
  });
};
