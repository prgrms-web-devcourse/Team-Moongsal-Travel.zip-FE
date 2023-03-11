import http from '@/api/core/axiosInstance';

export const getScrapDocument = async () => {
  const response = http.get(`api/storage`);

  return response;
};

export const deleteScarpDocument = async (docId: string) => {
  http.delete(`api/storage/${docId}`);
};
