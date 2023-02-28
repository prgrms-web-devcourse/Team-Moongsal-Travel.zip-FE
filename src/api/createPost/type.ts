export type CreatePost = {
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
};
