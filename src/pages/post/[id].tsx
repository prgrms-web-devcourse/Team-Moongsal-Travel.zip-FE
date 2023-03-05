import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import VerticalLinearStepper from '@/components/Stepper/VerticalStepper';

const SubTraveloguePage = () => {
  const router = useRouter();
  const [travelogueId, setTravelogueId] = useState('');
  const [subTravelogueStep, setSubTravelogueStep] = useState<string[]>([]);

  useEffect(() => {
    if (!router.isReady) return;
    const { travelogueId, days } = router.query;
    const array = Array.from(
      { length: parseInt(days as string) },
      (_, i) => `${i + 1}일차`,
    );
    setTravelogueId(travelogueId as string);
    setSubTravelogueStep(array);
  }, [router.isReady, router.query]);

  return (
    <Box sx={layout}>
      <VerticalLinearStepper travelogueId={travelogueId} subTravelogueStep={subTravelogueStep} />
    </Box>
  );
};

export default SubTraveloguePage;

const layout = { padding: '0 24px' };
