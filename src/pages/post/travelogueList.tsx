import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
// import { CircularProgress, Fade} from '@mui/material';
import { useRouter } from 'next/router';
// import { useMemo } from 'react';
import { useEffect, useState } from 'react';

// import { useGetTravelogueByKeyword } from '@/api/hooks/travelogue';
import { getTravelogueListByKeyword } from '@/api/travelogue';
import { TravelogueFeed } from '@/components/Travelogue';
// import useIntersect from '@/hooks/useIntersect';
import { TravelogueFeedType } from '@/types/travelogue';

const TravelogueList = () => {
  const router = useRouter();
  const [travelogues, setTravelogues] = useState<TravelogueFeedType[]>();
  const [isLoading, setIsLoading] = useState(false);

  // const { data, hasNextPage, isFetching, fetchNextPage } = useGetTravelogueByKeyword(
  //   router.query.keyword,
  //   5,
  // );

  useEffect(() => {
    const fetchTravelogues = async () => {
      if (router.isReady && typeof router.query.keyword === 'string') {
        try {
          setIsLoading(true);
          const response = await getTravelogueListByKeyword(router.query.keyword, 0, 100);
          console.log(response.data);
          setTravelogues(response.data.content);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchTravelogues();
  }, [router.isReady, router.query.keyword]);

  // const keywordTravelogues = useMemo(
  //   () => (data ? data.pages.flatMap(({ data }) => data.content) : []),
  //   [data],
  // );

  // const ref = useIntersect(async (entry, observer) => {
  //   observer.unobserve(entry.target);
  //   if (hasNextPage && !isFetching) {
  //     fetchNextPage();
  //   }
  // });

  // return (
  //   <Box component='section' margin='0 auto'>
  //     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  //       {travelogues &&
  //         travelogues.map((travelogue) => (
  //           <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />
  //         ))}
  //       <Fade in={isFetching}>
  //         <Box sx={{ bgcolor: 'white.main' }}>
  //           <CircularProgress color='primary' size={25} />
  //         </Box>
  //       </Fade>
  //     </Box>
  //     <Box height={5} ref={ref} />
  //   </Box>
  // );

  return (
    <Box sx={{ justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mt: '2rem',
          maxWidth: '90%',
          margin: '2rem auto',
        }}>
        <Button variant='outlined' startIcon={<TuneIcon />}>
          필터
        </Button>
      </Box>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <Box component='section'>
          {travelogues &&
            travelogues.map((travelogue) => (
              <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />
            ))}
        </Box>
      )}
    </Box>
  );
};

export default TravelogueList;
