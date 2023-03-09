import { Box, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { usePatchTravelogueDetailById } from '@/api/hooks/travelogue';
import Spinner from '@/components/common/Spinner';
import { TravelogueContent, TravelogueHeader } from '@/components/PostDetail';
import { TravelogueDetailType } from '@/types/travelogue';

const Detail = () => {
  const router = useRouter();
  const authority = 'writer'; // viewer
  const { mutate, isLoading } = usePatchTravelogueDetailById();
  const [travelogueDetail, setTravelogueDetail] = useState<TravelogueDetailType>();

  useEffect(() => {
    const { travelogueId } = router.query;
    if (travelogueId) {
      mutate(
        { travelogueId: travelogueId as string },
        {
          onSuccess: ({ data }) => {
            setTravelogueDetail(data);
          },
        },
      );
    }
  }, [mutate, router.isReady, router.query]);

  if (!travelogueDetail) return <Spinner isLoading={isLoading} />;

  return (
    <Box sx={{ p: '0 15px 50px 15px' }}>
      <Stack spacing={3}>
        <TravelogueHeader authority={authority} travelogueDetail={travelogueDetail} />
        {travelogueDetail.subTravelogues.map((subTravelogue) => (
          <TravelogueContent key={subTravelogue.day} subTravelogue={subTravelogue} />
        ))}
      </Stack>
    </Box>
  );
};

export default Detail;
