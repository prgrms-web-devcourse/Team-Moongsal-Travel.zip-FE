import http from '@/api/core';

import { CreatePost } from './type';

export const createPost = async (data: CreatePost, userId: string) => {
  await http.post({
    url: `api/travelogues?memberId=${userId}`,
    data,
  });
};
