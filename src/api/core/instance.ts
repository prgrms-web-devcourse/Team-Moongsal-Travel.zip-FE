import axios, { AxiosInstance } from 'axios';

import { insertToken } from '@/utils/helper';

const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return insertToken(config);
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
