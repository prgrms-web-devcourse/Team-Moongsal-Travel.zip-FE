import { useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { getPersonalTravelogues, getRecentTravelogueList } from '@/api/travelogue';
import { TravelogueParams } from '@/mocks/handlers/travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery<TravelogueFeedType[], AxiosError>({
    queryKey: ['RecentTravelogueData'],
    queryFn: () => getRecentTravelogueList(),
  });
};

export const useGetPersonalTravelogues = ({ size }: TravelogueParams) => {
  return useInfiniteQuery(
    ['PERSONAL_TRAVELOGUES'],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      getPersonalTravelogues({ page: pageParam, size }),
    {
      getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
        isLastPage ? undefined : pageNumber + 1,
    },
  );
};
