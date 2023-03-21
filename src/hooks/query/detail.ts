import { useMutation } from '@tanstack/react-query';

import { patchTravelogueDetailById } from '@/api/main';

export const usePatchTravelogueDetailById = () => {
  return useMutation({
    mutationFn: async (data: { travelogueId: string }) =>
      await patchTravelogueDetailById(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
