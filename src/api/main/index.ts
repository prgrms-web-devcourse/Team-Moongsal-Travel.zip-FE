import http from '@/api/core';
import { TRAVELOGUE_API_ROUTER } from '@/constants/path';
import {
  BaseTravelogueParamsType,
  TravelogueFeedType,
  TravelogueListType,
} from '@/types/main';

export const getTypeOfTravelogues = async ({
  page,
  size,
  type,
  sortedType,
}: BaseTravelogueParamsType): Promise<TravelogueFeedType[]> => {
  const response = await http.get<TravelogueListType>(
    `${TRAVELOGUE_API_ROUTER[type]}?page=${page}&size=${size}${
      sortedType ? `&sort=${sortedType}` : ''
    }`,
  );

  return response.data.content;
};

export const getPersonalTravelogues = async (size: number, page: number) => {
  return await http.get<TravelogueListType>(`api/travelogues?&page=${page}&=${size}`);
};

export const patchTravelogueDetailById = async ({
  travelogueId,
}: {
  travelogueId: string;
}) => {
  const response = await http.patch(`/api/travelogues/${travelogueId}`);
  return response;
};
