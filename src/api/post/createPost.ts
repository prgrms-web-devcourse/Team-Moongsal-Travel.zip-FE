import http from '@/api/core';
import { CreatePost } from '@/types/CreatePost';

export const createPost = async (data: CreatePost) => {
  await http.post({
    url: `api/travelogues`,
    data,
  });
};
