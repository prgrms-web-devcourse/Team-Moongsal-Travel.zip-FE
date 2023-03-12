import { InternalAxiosRequestConfig } from 'axios';

import { ACCESS_TOKEN } from '@/constants';
import { getItem } from '@/utils/storage';

export const insertAccessToken = (config: InternalAxiosRequestConfig) => {
  const token = getItem<string>(ACCESS_TOKEN);

  if (token && config.headers) {
    config.headers['AccessToken'] = `Bearer ${token}`;
  }

  return config;
};
