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
