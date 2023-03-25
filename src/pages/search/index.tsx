import { Box, CircularProgress, Fade, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import { Feed } from '@/components/common/Feed';
import { FilterButton } from '@/components/search';
import useIntersect from '@/hooks/common/useIntersect';
import { useGetTravelogueByFilter } from '@/hooks/query/search';
import { flexCenterStyle, fontStyle } from '@/styles/commonStyle';
import { FilterProps } from '@/types/search';

const SearchPage = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("''");
  const [filter, setFilter] = useState<FilterProps>({});

  const { data, hasNextPage, isFetching, fetchNextPage } = useGetTravelogueByFilter({
    keyword,
    size: '5',
    ...filter,
  });

  useEffect(() => {
    if (router.isReady && typeof router.query.keyword === 'string') {
      setKeyword(router.query.keyword);
    }
  }, [data, router.isReady, router.query.keyword]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  const travelogues = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  return (
    <Box component='section' sx={{ mt: '1rem' }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
        sx={{ p: '16px 15px 10px 15px' }}>
        <Typography component='p' sx={fontStyle}>
          <Typography
            color='blue070.main'
            component='span'
            sx={{ fontWeight: 600, wordBreak: 'break-all' }}>
            {keyword}
          </Typography>
          에 대한 검색 결과입니다.
        </Typography>
        <FilterButton setFilter={setFilter} />
      </Stack>
      <Stack>
        {travelogues.map(
          (travelogue) =>
            travelogue && <Feed key={travelogue.travelogueId} data={travelogue} />,
        )}
      </Stack>
      <Box sx={flexCenterStyle}>
        <Fade in={isFetching}>
          <Box sx={{ bgcolor: 'white.main' }}>
            <CircularProgress color='primary' size={25} />
          </Box>
        </Fade>
      </Box>
      <Box height={5} ref={ref} />
    </Box>
  );
};

export default SearchPage;
