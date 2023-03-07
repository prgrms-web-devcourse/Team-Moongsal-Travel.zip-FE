import http from '@/api/core';
import { SubTravelogueType, TravelogueType } from '@/types/post';

export const postTravelogue = async (data: TravelogueType) => {
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
