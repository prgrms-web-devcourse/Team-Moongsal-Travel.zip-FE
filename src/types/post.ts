export interface CreatePostType {
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

export type TravelogueFormType = Omit<CreatePostType, 'thumbnail'> & {
  thumbnail: File | null;
};

export interface TravelogueResponseType {
  id: number;
  days: number;
  nights: number;
}

export interface SubTravelogueFormType {
  title: string;
  content: string;
  addresses: { region: string }[];
}

export interface SubTravelogueType {
  title: string;
  content: string;
  addresses: {
    region: string;
  }[];
  transportationSet: string[];
  travelPhotoCreateReqs: { url: string }[];
}
