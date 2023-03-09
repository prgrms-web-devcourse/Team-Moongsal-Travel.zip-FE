export interface FilterProps {
  minDays?: string;
  maxDays?: string;
  minCost?: string;
  maxCost?: string;
}

export interface FilterFormType extends FilterProps {
  keyword: string;
}

export interface FilterAxiosProps extends FilterProps {
  keyword: string;
  size: number;
  page?: number;
}
