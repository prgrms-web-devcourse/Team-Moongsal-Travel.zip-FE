import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { usePatchTravelogueDetailById } from '@/api/hooks/travelogue';
import Spinner from '@/components/common/Spinner';
import { TravelogueDetail } from '@/components/TravelogueDetail';
import { TravelogueDetailType } from '@/types/travelogue';

const Detail = () => {
  const router = useRouter();
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
      <TravelogueDetail travelogueDetail={travelogueDetail} />
    </Box>
  );
};

export default Detail;
