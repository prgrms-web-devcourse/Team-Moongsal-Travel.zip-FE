import { useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import {
  getPersonalTravelogues,
  getRecentTravelogueList,
  getTravelogueListByKeyword,
} from '@/api/travelogue';
import { TravelogueParams } from '@/mocks/handlers/travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery<TravelogueFeedType[], AxiosError>({
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

export const useGetTravelogueByKeyword = (keyword: string, size: number) => {
  return useInfiniteQuery(
    ['KEYWORD_TRAVELOGUES', keyword],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      getTravelogueListByKeyword(keyword, pageParam, size),
    {
      getNextPageParam: ({ data: { last, number } }) => (last ? undefined : number + 1),
    },
  );
};
