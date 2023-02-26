import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const baseRequest = axios.create({
  baseURL: BASE_URL,
});

baseRequest.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error),
);

export { baseRequest };
