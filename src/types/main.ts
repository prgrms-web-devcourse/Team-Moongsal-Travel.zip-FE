import { TRAVELOGUE_API_ROUTER } from '@/constants/path';

export interface TravelogueFeedType {
  travelogueId: number;
  title: string;
  country: string;
  thumbnail: string;
  nights: number;
  days: number;
  totalCost: number;
  member: {
    nickname: string;
    profileImageUrl: string;
  };
}

export interface TravelogueListType {
  content: TravelogueFeedType[];
  pageable: string;
  size: number;
  number: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface BaseTravelogueParamsType {
  page: number;
  size: number;
  sortedType?: 'viewCount,desc';
  type: keyof typeof TRAVELOGUE_API_ROUTER;
}
