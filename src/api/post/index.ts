import http from '@/api/core';
import { CreatePost, SubTravelogue } from '@/types/post';

export const createPost = async (data: CreatePost) => {
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
