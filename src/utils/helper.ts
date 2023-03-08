import { InternalAxiosRequestConfig } from 'axios';
import { Dayjs } from 'dayjs';

export const getDateInfo = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};

export const insertToken = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  if (token && config.headers) {
    config.headers['AccessToken'] = `Bearer ${JSON.parse(token)}`;
  }

  return config;
};
