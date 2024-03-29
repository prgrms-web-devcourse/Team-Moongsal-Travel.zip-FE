import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRecoilState } from 'recoil';

import { getUserInformation, patchUserInformation } from '@/api/member';
import { NICKNAME_PATTERN } from '@/constants/pattern';
import useImageUpload from '@/hooks/common/useImageUpload';
import { userInformationState } from '@/recoil';
import { UserInformationPatchType } from '@/types/member';

export const useUserInformation = () => {
  const [userInformation, setUserInformation] = useRecoilState(userInformationState);

  const { getImageUrlFromS3 } = useImageUpload();

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

  const handleChangeSelectedImage = async (files: FileList | null) => {
    if (files && files[0]) {
      const { url } = await getImageUrlFromS3(files[0]);
      setUserInformation((state) => ({ ...state, profileImageUrl: url }));
    }
  };

  const handleChangeNickname = (nickname: string) => {
    if (!NICKNAME_PATTERN.value.test(nickname)) {
      setUserInformation((state) => ({
        ...state,
        errorMessage: NICKNAME_PATTERN.message,
      }));

      return;
    }

    setUserInformation((state) => ({ ...state, nickname, errorMessage: null }));
  };

  const handleChangeUserInformation = () => {
    const { nickname, profileImageUrl } = userInformation;

    mutate({ nickname, profileImageUrl });
  };

  return {
    userInformation,
    isLoading,
    handleChangeSelectedImage,
    handleChangeNickname,
    handleChangeUserInformation,
  } as const;
};
