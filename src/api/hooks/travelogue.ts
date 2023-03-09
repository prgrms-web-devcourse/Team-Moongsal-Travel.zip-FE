import { UseInfiniteQueryResult, useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import {
  // getPersonalTravelogues,
  getRecentTravelogueList,
  getTravelogueListByKeyword,
} from '@/api/travelogue';
import { TravelogueListType } from '@/types/travelogue';

export const useGetRecentTravelogue = () => {
  return useQuery({
    queryKey: ['RECENT_TRAVELOGUES'],
    queryFn: () => getRecentTravelogueList(),
  });
};

// export const useGetPersonalTravelogues = ({ size }: TravelogueParams) => {
//   return useInfiniteQuery(
//     ['PERSONAL_TRAVELOGUES'],
//     ({ pageParam = 0 }: QueryFunctionContext) =>
//       getPersonalTravelogues({ page: pageParam, size }),
//     {
//       getNextPageParam: ({ data: { isLastPage, pageNumber } }) =>
//         isLastPage ? undefined : pageNumber + 1,
//     },
//   );
// };

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
