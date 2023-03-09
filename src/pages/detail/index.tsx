import { Box, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { usePatchTravelogueDetailById } from '@/api/hooks/travelogue';
import { PostContents, PostInfo } from '@/components/PostDetail';
import { TravelogueDetailType } from '@/types/travelogue';

const Detail = () => {
  const router = useRouter();
  const authority = 'writer'; // viewer
  const { mutate } = usePatchTravelogueDetailById();
  const [travelogueDetail, setTravelogueDetail] = useState<TravelogueDetailType>();

  console.log('travelogueDetail', travelogueDetail);

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

  return (
    <Box sx={{ px: '24px' }}>
      <Stack spacing={5}>
        <PostInfo authority={authority} />
        <PostContents />
      </Stack>
    </Box>
  );
};

export default Detail;
