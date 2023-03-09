import { Box, CircularProgress, Fade } from '@mui/material';
import { useMemo } from 'react';

import { useGetPersonalTravelogues } from '@/api/hooks/travelogue';
import { TravelogueFeed } from '@/components/Travelogue';
import useIntersect from '@/hooks/useIntersect';

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
    <Box component='section' margin='0 auto'>
      {personalTravelogues.map((travelogue, index) => (
        <TravelogueFeed key={String(travelogue.travelogueId + index)} data={travelogue} />
      ))}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

export default PersonalFeedList;
