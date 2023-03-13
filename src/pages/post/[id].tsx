import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { VerticalStepper } from '@/components/Stepper';
import { TravelogueInfoType } from '@/components/Stepper/VerticalStepper';
import { SubTravelogue } from '@/components/SubTravelogue';
import useHandleTraveloguePublish from '@/hooks/useHandleTraveloguePublish';
import { getItem } from '@/utils/storage';

const SubTraveloguePage = () => {
  const router = useRouter();
  const [travelogueId, setTravelogueId] = useState('');
  const [subTravelogueStep, setSubTravelogueStep] = useState<string[]>([]);
  const [isEditPage, setIsEditPage] = useState(false);
  const [day, setDay] = useState('');
  const isClient = typeof window !== 'undefined';
  const { handleTraveloguePublish } = useHandleTraveloguePublish(travelogueId);

  useEffect(() => {
    if (isClient) {
      const travelogueInfo = getItem<TravelogueInfoType>(`travelogueInfo`);
      setTravelogueId(travelogueInfo?.id ?? '');
      setSubTravelogueStep(travelogueInfo?.step ?? []);
    }
  }, [isClient]);

  useEffect(() => {
    const { travelogueId, day, edit } = router.query;
    if (travelogueId && day && edit) {
      setIsEditPage(Boolean(edit as string));
      setTravelogueId(travelogueId as string);
      setDay(day as string);
    }
  }, [router.isReady, router.query]);

  return (
    <Box sx={layout}>
      {isEditPage ? (
        <SubTravelogue
          travelogueId={travelogueId}
          index={parseInt(day)}
          isEditPage={isEditPage}
        />
      ) : (
        <VerticalStepper
          travelogueId={travelogueId}
          subTravelogueStep={subTravelogueStep}
        />
      )}
      {!isEditPage && (
        <Box sx={{ borderTop: '1px solid #bdbdbd', mt: '20px' }}>
          <Button
            type='button'
            variant='contained'
            fullWidth
            sx={{ m: '20px 0', backgroundColor: 'blue070.main' }}
            onClick={handleTraveloguePublish}>
            발행
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SubTraveloguePage;

const layout = { padding: '16px 24px' };
