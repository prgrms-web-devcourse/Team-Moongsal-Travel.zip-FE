import http from '@/api/core';
import { FilterAxiosProps } from '@/types/search';

export const getTravelogueListByFilter = async ({
  keyword,
  page = '0',
  size = '5',
  minDays,
  maxDays,
  minCost,
  maxCost,
  sort,
}: FilterAxiosProps) => {
  const params = new URLSearchParams({
    keyword: keyword || '',
    page,
    size,
    ...(minDays && { minDays }),
    ...(maxDays && { maxDays }),
    ...(minCost && { minCost }),
    ...(maxCost && { maxCost }),
    ...(sort === 'popular' && { sort }),
  });

  const response = await http.get(`/api/travelogues/search/filters?${params}`);
  return response;
};
