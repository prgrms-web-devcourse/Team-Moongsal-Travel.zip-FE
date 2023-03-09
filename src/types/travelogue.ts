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
  subTravelogues: {
    title: string;
    content: string;
    day: number;
    addresses: [{ region: string }];
    transportationSet: string[];
    travelPhotoCreateReqs: { url: string }[];
  }[];
  transportations: string[];
  countLikes: number;
  isLiked: boolean;
  viewCount: number;
  bookmarked: boolean;
}
