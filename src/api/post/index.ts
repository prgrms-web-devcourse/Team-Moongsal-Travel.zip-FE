import http from '@/api/core';
import { CreatePostType, SubTravelogueType } from '@/types/post';

export const createPost = async (data: CreatePostType) => {
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
