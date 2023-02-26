import { baseRequest } from '@/api/core';
import { UserRegister } from '@/api/user/type';

export const postUserRegister = async (data: UserRegister) => {
  const response = await baseRequest.request({
    method: 'POST',
    url: 'api/auth/signup',
    data,
  });
  return response;
};
