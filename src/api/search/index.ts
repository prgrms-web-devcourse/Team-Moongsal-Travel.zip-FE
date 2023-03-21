import { baseRequest } from '@/api/core';
import { FilterAxiosProps } from '@/types/filter';

export const getTravelogueListByFilter = async ({
  keyword,
  page = 0,
  size = 5,
  minDays,
  maxDays,
  minCost,
  maxCost,
  sort,
}: FilterAxiosProps) => {
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search/filters?keyword=${keyword}&page=${page}&size=${size}
    ${minDays ? `&minDays=${minDays}` : ''} ${maxDays ? `&maxDays=${maxDays}` : ''}
    ${minCost ? `&minCost=${minCost}` : ''} ${maxCost ? `&maxCost=${maxCost}` : ''}
    ${sort === 'popular' ? `&sort=${sort}` : ''}
    `,
  });
  return response;
};
