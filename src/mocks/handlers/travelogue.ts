import { rest } from 'msw';

import { TravelogueFeedType } from '@/types/travelogue';

export interface TravelogueParams {
  size: number;
  page?: number;
}

export interface TravelogueResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

const mockTravelogue = {
  travelogueId: 99,
  title: '일본 다녀왔습니다.',
  nights: 1,
  days: 2,
  totalCost: 400000,
  country: '일본',
  thumbnail:
    'https://travel-zip-bucket.s3.ap-northeast-2.amazonaws.com/upload/44664886-f8b2-4977-aedd-471b3259cc52kari-shea-1SAnrIxw5OY-unsplash.jpg',
  member: {
    nickname: '프로여행러',
    profileImageUrl: 'default',
  },
};

const mockTravelogues = Array.from(Array(30).keys()).map(() => mockTravelogue);

export const getMockTravelogue = rest.get('/travelogues', (req, res, ctx) => {
  const { searchParams } = req.url;
  const size = Number(searchParams.get('size')) || 5;
  const page = Number(searchParams.get('page'));
  const totalCount = mockTravelogues.length;
  const totalPages = Math.round(totalCount / size);

  return res(
    ctx.status(200),
    ctx.json<TravelogueResponse<TravelogueFeedType>>({
      content: mockTravelogues.slice(page * size, (page + 1) * size),
      pageNumber: page,
      pageSize: size,
      totalPages,
      totalCount,
      isLastPage: totalPages <= page,
      isFirstPage: page === 0,
    }),
    ctx.delay(300),
  );
});
