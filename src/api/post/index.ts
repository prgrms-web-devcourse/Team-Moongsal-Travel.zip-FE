import http from '@/api/core';
import { SubTravelogue, TravelogueType } from '@/types/post';

export const postTravelogue = async (data: TravelogueType) => {
  await http.post({
    url: `api/travelogues`,
    data,
  });
};

export const postSubTravelogue = async ({
  data,
  travelogueId,
}: {
  data: SubTravelogue;
  travelogueId: string;
}) =>
  await http.post({
    url: `api/travelogues/${travelogueId}/subTravelogues`,
    data,
  });
