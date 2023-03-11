import http from '@/api/core/axiosInstance';

export const getScrapDocument = () => {
  const response = http.get(`api/storage`);

  return response;
};

export const deleteScrapDocument = (docId: string) => {
  http.delete(`api/storage/${docId}`);
};

export const createScrapDocument = (title: string) => {
  http.post(`api/storage`, { title: title });
};
