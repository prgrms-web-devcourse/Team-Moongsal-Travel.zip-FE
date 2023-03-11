import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { UserInformationType } from '@/types/profile';

import { getUserInformation } from '../profile';

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

  return { userInformation, isLoading } as const;
};
