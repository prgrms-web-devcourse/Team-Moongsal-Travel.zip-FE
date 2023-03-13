import { UseInfiniteQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import {
  getPersonalTravelogues,
  getTravelogueListByFilter,
  getTravelogueListByKeyword,
  getTypeOfTravelogues,
  patchTravelogueDetailById,
} from '@/api/travelogue';
import { FilterAxiosProps } from '@/types/filter';
import { TravelogueListType } from '@/types/travelogue';

export const useGetRecentTravelogues = () => {
  return useQuery({
    queryKey: ['RECENT_TRAVELOGUES'],
    queryFn: () => getTypeOfTravelogues({ type: 'recent', page: 0, size: 5 }),
  });
};

export const useGetPersonalTravelogues = (size: number) => {
  return useInfiniteQuery(
    ['PERSONAL_TRAVELOGUES'],
    ({ pageParam = 0 }: QueryFunctionContext) => getPersonalTravelogues(size, pageParam),
    {
      getNextPageParam: ({ data: { last, number } }) => (last ? undefined : number + 1),
    },
  );
};

export const useGetTravelogueByKeyword = (
  keyword: string,
  size: number,
): UseInfiniteQueryResult<AxiosResponse<TravelogueListType>, unknown> => {
  return useInfiniteQuery(
    ['KEYWORD_TRAVELOGUES', keyword],
    ({ pageParam = 0 }: QueryFunctionContext) =>
      getTravelogueListByKeyword(keyword, pageParam, size),
    {
      getNextPageParam: ({ data: { last, number } }) => (last ? undefined : number + 1),
    },
  );
};

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

export const usePatchTravelogueDetailById = () => {
  return useMutation({
    mutationFn: async (data: { travelogueId: string }) =>
      await patchTravelogueDetailById(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const useGetWrittenByMeTravelogues = () => {
  return useQuery({
    queryKey: ['WRITTEN_BY_ME_TRAVELOGUES'],
    queryFn: () => getTypeOfTravelogues({ type: 'writtenByMe', page: 0, size: 5 }),
  });
};

export const useGetTemporarySaveTravelogues = () => {
  return useQuery({
    queryKey: ['TEMPORARY_SAVE_TRAVELOGUES'],
    queryFn: () => getTypeOfTravelogues({ type: 'temporarySave', page: 0, size: 5 }),
  });
};
