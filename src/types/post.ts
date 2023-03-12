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

export interface TravelogueResponseType {
  country: {
    name: string;
  };
  period: { startDate: number[]; endDate: number[]; nights: number };
  cost: {
    transportation: number;
    lodge: number;
    etc: number;
    total: number;
  };
  title: string;
  thumbnail: string;
  subTravelogueIds: number[];
}

export type TravelogueFormType = Omit<TravelogueType, 'thumbnail'> & {
  thumbnail: File | null;
};

export interface TravelogueSaveResponseType {
  id: number;
  days: number;
  nights: number;
}

export interface SubTravelogueType {
  title: string;
  content: string;
  day: number;
  addresses: { region: string }[];
  transportationSet: string[];
  travelPhotoCreateReqs: { url: string }[];
}

export type StepType = 'next' | 'back';
