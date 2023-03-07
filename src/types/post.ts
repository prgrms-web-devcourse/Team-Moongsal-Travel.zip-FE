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

export interface TravelogueResponseType {
  id: number;
  days: number;
  nights: number;
}

export interface SubTravelogueType {
  title: string;
  content: string;
  addresses: { region: string }[];
  transportationSet: string[];
  travelPhotoCreateReqs: { url: string }[];
}

export type StepType = 'next' | 'back';
