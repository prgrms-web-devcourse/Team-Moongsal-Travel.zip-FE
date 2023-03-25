import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { getTravelogueListByFilter } from '@/api/search';
import { TravelogueListType } from '@/types/main';
import { FilterAxiosProps } from '@/types/search';

export const useGetTravelogueByFilter = ({
  keyword,
  size,
  minDays,
  maxDays,
  minCost,
  maxCost,
  sort,
}: FilterAxiosProps): UseInfiniteQueryResult<
  AxiosResponse<TravelogueListType>,
  unknown
> => {
  return useInfiniteQuery(
    ['FILTER_TRAVELOGUES', keyword, minDays, maxDays, minCost, maxCost, sort],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      getTravelogueListByFilter({
        keyword,
        size,
        page: pageParam,
        minDays,
        maxDays,
        minCost,
        maxCost,
        sort,
      }),
    {
      getNextPageParam: ({ data: { last, number } }) => (last ? undefined : number + 1),
    },
  );
};
