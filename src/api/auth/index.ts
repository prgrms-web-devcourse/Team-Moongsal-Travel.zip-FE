import http from '@/api/core';
import { User, UserRegister, VerifyNickname } from '@/types/auth';

export const postUserRegister = async (data: UserRegister) => {
  return await http.post('api/members/signup', data);
};

export const postSendEmail = async (data: { email: string }) => {
  return await http.post('api/emails', data);
};

export const postVerifyCode = async (data: { email: string; code: string }) => {
  return await http.post('api/members/valid/code', data);
};

export const postUserSignIn = async (data: User) => {
  return await http.post('api/members/login', data);
};

export const postVerifyNickname = async (data: { nickname: string }) => {
  const response = await http.post<VerifyNickname>('api/members/valid/nickname', data);
  return response.data;
};
