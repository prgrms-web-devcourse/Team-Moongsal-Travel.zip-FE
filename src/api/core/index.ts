import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const baseRequest = axios.create({
  baseURL: BASE_URL,
});

baseRequest.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error),
);

const handleRequest = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');

  return token
    ? ({
        ...config,
        headers: {
          ...config.headers,
          AccessToken: `Bearer ${JSON.parse(token)}`,
        },
      } as AxiosRequestConfig)
    : config;
};

const createApiMethod =
  (axiosInstance: AxiosInstance, methodType: Method) => (config: AxiosRequestConfig) => {
    return axiosInstance({ ...handleRequest(config), method: methodType });
  };

export { baseRequest };

const http = {
  get: createApiMethod(baseRequest, 'GET'),
  post: createApiMethod(baseRequest, 'POST'),
  put: createApiMethod(baseRequest, 'PUT'),
  patch: createApiMethod(baseRequest, 'PATCH'),
  delete: createApiMethod(baseRequest, 'DELETE'),
};

export default http;
