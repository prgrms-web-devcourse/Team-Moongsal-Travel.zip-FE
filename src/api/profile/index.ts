import http from '@/api/core/axiosInstance';
import { UserInformationType } from '@/types/profile';

export const getUserInformation = async (): Promise<UserInformationType> => {
  const response = await http.get('api/members/my/info');

  return response.data;
};
