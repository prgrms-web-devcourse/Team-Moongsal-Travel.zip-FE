export interface TravelogueType {
  country: {
    name: string;
  };
  period: { startDate: string; endDate: string };
  cost: {
    transportation?: string;
    lodge?: string;
    etc?: string;
    total: string;
  };
  title: string;
  thumbnail: string;
}

export type TravelogueFormType = Omit<TravelogueType, 'thumbnail'> & {
  thumbnail: File | null;
};

export interface SubTravelogueFormType {
  title: string;
  content: string;
  addresses: { country: string; city: string; spot: string }[];
}

export interface SubTravelogueType {
  title: string;
  content: string;
  addresses: {
    country: string;
    city: string;
    spot: string;
  }[];
  transportationSet: string[];
  travelPhotoCreateReqs: { url: string }[];
}
