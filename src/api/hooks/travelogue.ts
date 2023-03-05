import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getRecentTravelogueList } from '@/api/travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery<TravelogueFeedType[], AxiosError>({
    queryKey: ['RecentTravelogueData'],
    queryFn: () => getRecentTravelogueList(),
  });
};
