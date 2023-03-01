export interface CreatePost {
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

export interface SubTravelogue {
  title: string;
  content: string;
  addresses: [
    {
      country: string;
      city: string;
      spot: string;
    },
  ];
  transportationSet: string[];
  travelPhotoCreateReqs: { url: string }[];
}


