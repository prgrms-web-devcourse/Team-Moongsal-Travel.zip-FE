import http from '@/api/core/axiosInstance';
import { ScrapInfoType } from '@/types/scrap';

export const getScrapDocument = () => {
  const response = http.get(`api/storage`);

  return response;
};

export const deleteScrapDocument = (docId: string) => {
  http.delete(`api/storage/${docId}`);
};

export const createScrapDocument = async (title: string) => {
  const response = await http.post(`api/storage`, { title });

  return response;
};

export const getScrapDetail = async (docId: string) => {
  const response = await http.get(`/api/storage/${docId}`);

  return response;
};

export const deleteScrap = async (docId: string, scrapId: string) => {
  const response = await http.delete(`api/storage/${docId}/scrap/${scrapId}`);

  return response;
};

export const createScrap = async ({
  storageObjectId: docId,
  content,
  postId,
}: ScrapInfoType) => {
  const response = await http.post(`api/storage/scrap`, {
    storageObjectId: docId,
    content,
    postId,
  });

  return response;
};
