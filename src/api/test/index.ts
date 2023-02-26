import { baseRequest } from '@/api/core';
import { PatchTestType, TestType } from '@/api/test/type';

export const getTest = async (id: string) => {
  const { data } = await baseRequest.request({
    method: 'GET',
    url: `test/get?id=${id}`,
  });
  return data;
};

export const postTest = async (body: TestType) => {
  return await baseRequest.request({
    method: 'POST',
    url: 'test/post',
    data: body,
  });
};

export const patchTest = async ({ id, patchData }: PatchTestType) => {
  const { data } = await baseRequest.request({
    method: 'PATCH',
    url: `test/patch?id=${id}`,
    data: patchData,
  });
  return data;
};

export const deleteTest = async (id: string) => {
  return await baseRequest.request({
    method: 'DELETE',
    url: `test/delete?id=${id}`,
  });
};
