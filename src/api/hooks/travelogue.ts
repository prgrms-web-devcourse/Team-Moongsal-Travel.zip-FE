import { useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { getPersonalTravelogues, getRecentTravelogueList } from '@/api/travelogue';
import { TravelogueParams } from '@/mocks/handlers/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery({
    queryKey: ['RECENT_TRAVELOGUES'],
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
