import { baseRequest } from '@/api/core';
import { User, UserRegister, VerifyNickname } from '@/types/auth';

export const postUserRegister = async (data: UserRegister) => {
  return await baseRequest.request({
    method: 'POST',
    url: 'api/members/signup',
    data,
  });
};

export const postSendEmail = async (data: { email: string }) => {
  return await baseRequest.request({
    method: 'POST',
    url: 'api/emails',
    data,
  });
};

export const postVerifyCode = async (data: { email: string; code: string }) => {
  return await baseRequest.request({
    method: 'POST',
    url: 'api/members/valid/code',
    data,
  });
};

export const postUserSignIn = async (data: User) => {
  return await baseRequest.request({
    method: 'POST',
    url: 'api/members/login',
    data,
  });
};

export const postVerifyNickname = async (data: { nickname: string }) => {
  const response = await baseRequest.request<VerifyNickname>({
    method: 'POST',
    url: `api/members/valid/nickname`,
    data,
  });
  return response.data;
};
