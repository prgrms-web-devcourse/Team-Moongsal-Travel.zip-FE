import { useQuery } from '@tanstack/react-query';

import { getUserInformation } from '../profile';

export const useUserInformation = () => {
  return useQuery({
    queryKey: ['USER_INFORMATION'],
    queryFn: () => getUserInformation(),
  });
};
