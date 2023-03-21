import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getSubTravelogueForEdit,
  getTravelogueForEdit,
  patchSubTravelogue,
  patchTravelogue,
  patchTraveloguePublish,
  postSubTravelogue,
  postTravelogue,
} from '@/api/travelogue';
import { SubTravelogueType, TravelogueType } from '@/types/post';

export const useSaveSubTravelogue = (isPatch: boolean) => {
  return useMutation({
    mutationFn: async (data: {
      data: SubTravelogueType;
      travelogueId: string;
      subTravelogueId: string;
    }) => {
      return isPatch ? await patchSubTravelogue(data) : await postSubTravelogue(data);
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const useSaveTravelogue = (isPatch: boolean) => {
  return useMutation({
    mutationFn: async (data: { data: TravelogueType; travelogueId: string }) => {
      return isPatch ? await patchTravelogue(data) : await postTravelogue(data);
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePatchTraveloguePublish = () => {
  return useMutation({
    mutationFn: async (data: { travelogueId: string }) =>
      await patchTraveloguePublish(data),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const useGetTravelogueForEdit = (travelogueId: string) => {
  return useQuery({
    queryKey: ['TRAVELOGUE', travelogueId],
    queryFn: () => getTravelogueForEdit(travelogueId),
    enabled: false,
  });
};

export const useGetSubTravelogueForEdit = (
  travelogueId: string,
  subTravelogueId: string,
) => {
  return useQuery({
    queryKey: ['SUB_TRAVELOGUE', travelogueId, subTravelogueId],
    queryFn: () => getSubTravelogueForEdit(travelogueId, subTravelogueId),
  });
};
