import { AxiosResponse } from 'axios';

import http from '@/api/core';
import { SubTravelogueType, TravelogueResponseType, TravelogueType } from '@/types/post';

export const postTravelogue = async (
  data: TravelogueType,
): Promise<AxiosResponse<TravelogueResponseType>> => {
  return await http.post({
    url: `api/travelogues`,
    data,
  });
};

export const postSubTravelogue = async ({
  data,
  travelogueId,
}: {
  data: SubTravelogueType;
  travelogueId: string;
}) => {
  return await http.post({
    url: `api/travelogues/${travelogueId}/subTravelogues`,
    data,
  });
};

export const patchTraveloguePublish = async ({
  travelogueId,
}: {
  travelogueId: number;
}) => {
  return await http.patch({
    url: `api/travelogues/${travelogueId}/publish`,
  });
};
