import http from '@/api/core';
import { CreatePost } from '@/types/CreatePost';

export const createPost = async (data: CreatePost, userId: string) => {
  await http.post({
    url: `api/travelogues?memberId=${userId}`,
    data,
  });
};
