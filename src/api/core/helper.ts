import { InternalAxiosRequestConfig } from 'axios';

export const insertAccessToken = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  if (token && config.headers) {
    config.headers['AccessToken'] = `Bearer ${JSON.parse(token)}`;
  }

  return config;
};
