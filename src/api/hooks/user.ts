import { useMutation } from '@tanstack/react-query';

import { postUserRegister } from '@/api/user';
import { UserRegister } from '@/api/user/type';

export const usePostUserRegister = () => {
  return useMutation({
    mutationFn: async (data: UserRegister) => {
      const response = await postUserRegister(data);
      return response;
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
