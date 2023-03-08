import axios from 'axios';

import { baseRequest } from '@/api/core';
import { TravelogueParams, TravelogueResponse } from '@/mocks/handlers/travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

export const getRecentTravelogueList = async (
  page = 1,
): Promise<TravelogueFeedType[]> => {
  const response = await baseRequest({
    method: 'GET',
    url: `api/travelogues?&page=${page}`,
  });

  return response.data.content;
};

export const getPersonalTravelogues = async (params: TravelogueParams) => {
  return await axios.get<TravelogueResponse<TravelogueFeedType>>('/travelogues', {
    params,
  });
};

export const getTravelogueListByKeyword = async (keyword = "''", page = 0, size = 5) => {
  keyword === '' ? (keyword = "''") : keyword;
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search?keyword=${keyword}&page=${page}&size=${size}`,
  });

  return response;
};

interface FilterProps {
  keyword: string;
  minDays?: string;
  maxDays?: string;
  minCost?: string;
  maxCost?: string;
}

export const getTravelogueListByFilter = async ({
  keyword,
  minDays,
  maxDays,
  minCost,
  maxCost,
}: FilterProps) => {
  const response = await baseRequest({
    method: 'GET',
    url: `/api/travelogues/search/filters?keyword=${keyword}${
      minDays && `&minDays=${minDays}`
    }${maxDays && `&maxDays=${maxDays}`}${minCost && `&minCost=${minCost}`}${
      maxCost && `&maxCost=${maxCost}`
    }`,
  });

  return response;
};
