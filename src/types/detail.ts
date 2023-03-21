import { SubTravelogueType } from '@/types/travelogue';

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
  isWriter: boolean;
}

export type TravelInfoTitle = '여행지' | '여행기간' | '여행경비' | '이동수단';

export interface SubTravelogueDetailType extends SubTravelogueType {
  subTravelogueId: number;
}
