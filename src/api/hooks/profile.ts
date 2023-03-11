import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useState } from 'react';

import { getUserInformation, patchUserInformation } from '@/api/profile';
import { UserInformationPatchType, UserInformationType } from '@/types/profile';

export const useUserInformation = () => {
  const [userInformation, setUserInformation] = useState<UserInformationType>({
    email: '',
    nickname: '',
    profileImageUrl: '',
    birthYear: '',
  });

  const { isLoading } = useQuery({
    queryKey: ['USER_INFORMATION'],
    queryFn: () => getUserInformation(),
    onSuccess: (data) => {
      setUserInformation(data);
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: UserInformationPatchType) =>
      await patchUserInformation(data),
    onSuccess: (data) => {
      setUserInformation(data);
    },
    onError: ({ message }: AxiosError) => {
      console.error(message);
    },
  });

  // Patch Method Test
  const handleChangeUserInformation = () => {
    mutate({
      nickname: 'moom',
      profileImageUrl:
        'https://travel-zip-bucket.s3.ap-northeast-2.amazonaws.com/upload/4ad6520e-7498-4d19-b022-67701a6599e1EfW549HUMAEGALk.jpeg',
    });
  };

  return { userInformation, isLoading, handleChangeUserInformation } as const;
};
