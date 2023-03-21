import http from '@/api/core/axiosInstance';
import { UserInformationPatchType, UserInformationType } from '@/types/member';

export const getUserInformation = async (): Promise<UserInformationType> => {
  const response = await http.get('api/members/my/info');

  return response.data;
};

export const patchUserInformation = async (
  data: UserInformationPatchType,
): Promise<UserInformationType> => {
  const response = await http.patch('api/members/my/settings', data);

  return response.data;
};
