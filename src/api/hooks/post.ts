import { useMutation } from '@tanstack/react-query';

import { postSubTravelogue } from '@/api/post';
import { SubTravelogue } from '@/types/post';

export const usePostSubTravelogue = () => {
  return useMutation({
    mutationFn: async (data: { data: SubTravelogue; travelogueId: string }) =>
      await postSubTravelogue(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
