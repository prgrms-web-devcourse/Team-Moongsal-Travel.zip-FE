import { baseRequest } from '@/api/core';
import { UserRegister } from '@/api/user/type';

export const postUserRegister = async (data: UserRegister) =>
  await baseRequest.request({
    method: 'POST',
    url: 'api/auth/signup',
    data,
  });

export const postSendEmail = async (data: { email: string }) =>
  await baseRequest.request({
    method: 'POST',
    url: 'api/auth/email',
    data,
  });

export const postVerifyCode = async (data: { email: string; code: string }) =>
  await baseRequest.request({
    method: 'POST',
    url: 'api/auth/valid/code',
    data,
  });
