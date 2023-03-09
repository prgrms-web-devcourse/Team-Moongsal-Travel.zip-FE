import { Box } from '@mui/material';
import { CircularProgress, Fade } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useGetTravelogueByKeyword } from '@/api/hooks/travelogue';
import { FilterButton } from '@/components/common';
import { TravelogueFeed } from '@/components/Travelogue';
import useIntersect from '@/hooks/useIntersect';
import { TravelogueFeedType } from '@/types/travelogue';

const TravelogueList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("''");
  const [travelogues, setTravelogues] = useState<TravelogueFeedType[]>([]);

  const { data, hasNextPage, isFetching, fetchNextPage } = useGetTravelogueByKeyword(
    keyword,
    5,
  );

  useEffect(() => {
    if (router.isReady && typeof router.query.keyword === 'string') {
      setKeyword(router.query.keyword);
      data && setTravelogues(data.pages.flatMap(({ data }) => data.content));
    }
  }, [data, router.isReady, router.query.keyword]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage) {
      fetchNextPage();
    }
  });

  return (
    <Box component='section'>
      <FilterButton setTravelogues={setTravelogues} />
      {travelogues &&
        travelogues.map(
          (travelogue) =>
            travelogue && (
              <TravelogueFeed key={travelogue.travelogueId} data={travelogue} />
            ),
        )}
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

export default TravelogueList;
