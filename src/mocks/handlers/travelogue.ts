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
    'https://travel-zip-bucket.s3.ap-northeast-2.amazonaws.com/upload/2601f1d2-b4de-4f8f-93b5-2a54daf911c95c3fa9ae-c472-43ed-8d41-91378fee63c9dog-423398_1280.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aDmFwLW5vcnRoZWFzdC0yIkcwRQIhAMuIf4mJ58qA5bA0ib568gTb%2Bf4br5OUxM%2BM6vX3J68YAiBqHaFDnDJMtJHQdkogHGfpbUjo69sUBk9VFeIP9DNf1SqEAwj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE3NDE3MDgxNjIzMCIMlDOKqvdfce0GZ3qkKtgCGqbMnXlNw6%2FYEFuZTrEhs9uBZ52mlJYlP16S6cKUPF0H6CksVfRooAqSUW%2F3hEyC57vbubdi4ryLd34HbatvCM0riSpmIN4oPCq126L7x6bEquNPVFmCDGJpNN3zwZss5LCdt8yAHclogqOpMk8mgsFK%2Bq7OtXPfXIwEr%2BpP1BHHArG5%2Bkz1L32OFMmrMQcWvM%2BtmmxcYjiOyT7LusJcq0ZA3GW%2BxYKuuAB5elxBEnbjg9vuPzm6S5za1rh%2F%2FcDhuIGHytdVOVzc4TXYtRmW3KYymeYX0QIaQxUh%2B%2Ff%2FkKtlxCfZ84vyteLXR%2BOP6JblUldKtUXU%2BrG2J90Huz6R%2FLBcFtvZmACc0YBMSnbEEngvg8a5v709RbbMAqFH4ZTgn9d6epWmTJ9lNwP0qjnBp80aBmw6tqimjENiswJ9IQV6GZ5KjIrHOgbHvBaM0elKeL7A1cpcIRQw7KOUoAY6swJe0R0eZO3Rl9iVZtbqZrg61OYCWuQPfmlK3u0%2FSfrMXV7pAFIyNtSwqucDxBsVUVmAwR8%2BcRE7Et4gizDojyxTE6LDZgFHiuWOpl0dYoKqpM1EtuVj9lIbDFiLC3Nwk6v%2FQmpYmwJZ6w%2BkS7H2QeBkxNrHpDUoxHuyvpsK%2FaNrKxwlvvZ%2BttCYsc%2BrTOMVhNsaM6m3k5eZwHmckWaKUHp8XQuIFqYL9oEF8XFAv6ILvBEpYkrqh3xZyyjXH%2FzTO6jH6vUyKAtPXr46dkVR5Altx5CrBmsBH%2F3ULm2UQTvxRDxYBPsNc7vck1yTY9WDHbwa0jBmg6n%2FTPmHaYoThgN8DoufOKLN6qzBDtjLu5zNFCxFdIV13hrTF1id1IYCxcvoKLldbH5v4cBnGjRYjzFGoDy6&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230306T083523Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASRDLDX3TM3HGFH4N%2F20230306%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=0d2f9c655783785c066e15e808ae4263cc2c185e04d08ccd8e881e9c3112743d',
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
    ctx.delay(2000),
  );
});
