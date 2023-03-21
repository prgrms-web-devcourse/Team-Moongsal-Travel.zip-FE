import { useQuery } from '@tanstack/react-query';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

import { getPersonalTravelogues, getTypeOfTravelogues } from '@/api/main';
import { BaseTravelogueParamsType } from '@/types/travelogue';

export const useGetBaseTravelogueList = ({
  page = 0,
  size = 5,
  sortedType,
  type,
}: BaseTravelogueParamsType) => {
  return useQuery({
    queryKey: ['RECENT_TRAVELOGUES', page, size, sortedType, type],
    queryFn: () => getTypeOfTravelogues({ type, page, size, sortedType }),
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
