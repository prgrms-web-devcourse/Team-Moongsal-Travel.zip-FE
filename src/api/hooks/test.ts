import { useMutation, useQuery } from '@tanstack/react-query';

import { deleteTest, getTest, patchTest, postTest } from '@/api/test';
import { PatchTestType, TestType } from '@/api/test/type';

export const useGetTest = (id: string) => {
  return useQuery({
    queryKey: ['getTest', id],
    queryFn: async () => {
      const response = await getTest(id);
      return response;
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePostTest = () => {
  return useMutation({
    mutationFn: async (data: TestType) => {
      const response = await postTest(data);
      return response;
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const usePatchTest = () => {
  return useMutation({
    mutationFn: async (variables: PatchTestType) => {
      const response = await patchTest(variables);
      return response;
    },
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};

export const useDeleteTest = () => {
  return useMutation({
    mutationFn: async (id: string) => await deleteTest(id),
    onError: (error: { message: string }) => {
      console.error(error.message);
    },
  });
};
