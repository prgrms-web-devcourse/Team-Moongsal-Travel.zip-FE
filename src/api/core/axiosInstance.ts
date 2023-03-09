import axios, { AxiosInstance } from 'axios';

import { insertAccessToken } from '@/api/core/helper';

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return insertAccessToken(config);
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use((response) => response);

  return instance;
};

const http = setInterceptors(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  }),
);

export default http;
