import { rest } from 'msw';

export interface PaginationResponse<T> {
  contents: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  isLastPage: boolean;
  isFirstPage: boolean;
}

export interface User {
  id: number;
  name: string;
}

const users = Array.from(Array(210).keys()).map(
  (id): User => ({ id, name: `denis${id}` }),
);

export const handlers = [
  rest.get('/users', async (req, res, ctx) => {
    const { searchParams } = req.url;
    const size = Number(searchParams.get('size'));
    const page = Number(searchParams.get('page'));
    const totalCount = users.length;
    const totalPages = Math.round(totalCount / size);

    return res(
      ctx.status(200),
      ctx.json<PaginationResponse<User>>({
        contents: users.slice(page * size, (page + 1) * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
      }),
      ctx.delay(1500),
    );
  }),
];
