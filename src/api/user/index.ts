import { baseRequest } from '@/api/core';
import { User, UserRegister } from '@/types/auth';

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
    url: 'api/valid/code',
    data,
  });

export const postUserSignIn = async (data: User) =>
  await baseRequest.request({
    method: 'POST',
    url: 'api/auth/signin',
    data,
  });
