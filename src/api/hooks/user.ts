import { useMutation } from '@tanstack/react-query';

import {
  postSendEmail,
  postUserRegister,
  postUserSignIn,
  postVerifyCode,
} from '@/api/user';
import { UserRegister, UserSignIn } from '@/api/user/type';

export const usePostUserRegister = () => {
  return useMutation({
    mutationFn: async (data: UserRegister) => await postUserRegister(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePostSendEmail = () => {
  return useMutation({
    mutationFn: async (data: { email: string }) => await postSendEmail(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePostVerifyCode = () => {
  return useMutation({
    mutationFn: async (data: { email: string; code: string }) =>
      await postVerifyCode(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePostUserSignIn = () => {
  return useMutation({
    mutationFn: async (data: UserSignIn) => await postUserSignIn(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
