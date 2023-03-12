import { SubTravelogueDetailType } from '@/types/post';

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

export interface TravelogueDetailType {
  profileImageUrl: string;
  nickname: string;
  id: number;
  title: string;
  country: string;
  nights: number;
  days: number;
  totalCost: number;
  subTravelogues: SubTravelogueDetailType[];
  transportations: string[];
  countLikes: number;
  isLiked: boolean;
  viewCount: number;
  bookmarked: boolean;
  thumbnail: string;
}

export type TravelInfoTitle = '여행지' | '여행기간' | '여행경비' | '이동수단';
