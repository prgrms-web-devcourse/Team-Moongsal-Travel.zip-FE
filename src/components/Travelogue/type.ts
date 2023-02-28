export interface TravelogueFeed {
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
