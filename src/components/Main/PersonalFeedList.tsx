import { Box, CircularProgress, Fade, Stack } from '@mui/material';
import { useMemo } from 'react';

import { Title } from '@/components/common';
import { Feed } from '@/components/Travelogue/Feed';
import useIntersect from '@/hooks/common/useIntersect';
import { useGetPersonalTravelogues } from '@/hooks/query/main';
import { flexCenterStyle } from '@/styles/commonStyle';

const PersonalFeedList = () => {
  const { data, hasNextPage, isFetching, fetchNextPage } = useGetPersonalTravelogues(5);

  const personalTravelogues = useMemo(
    () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
    [data],
  );

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  if (personalTravelogues.length === 0) {
    return null;
  }

  return (
    <Stack component='section'>
      <Title bold='bold' fontSize='1.4rem' color='dark.main' sx={{ ml: '15px' }}>
        추천 여행 일지
      </Title>
      {personalTravelogues.map((travelogue) => (
        <Feed key={String(travelogue.travelogueId)} data={travelogue} isBottomPadding />
      ))}
      <Box sx={flexCenterStyle}>
        <Fade in={isFetching}>
          <Box sx={{ bgcolor: 'white.main' }}>
            <CircularProgress color='primary' size={25} />
          </Box>
        </Fade>
      </Box>
      <Box height={5} ref={ref} />
    </Stack>
  );
};

export default PersonalFeedList;
