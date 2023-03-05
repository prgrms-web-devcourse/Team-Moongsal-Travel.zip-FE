import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { StepperButton, SubTravelogue } from '@/components/CreatePost';

export interface TravelogueQueryType {
  travelogueId: string;
  days: string;
}

const SubTraveloguePage = () => {
  const [steps, setSteps] = useState(0);
  const router = useRouter();
  const [travelogueQuery, setTravelogueQuery] = useState<TravelogueQueryType>({
    travelogueId: '',
    days: '',
  });

  useEffect(() => {
    if (!router.isReady) return;
    const { travelogueId, days } = router.query;
    if (typeof travelogueId === 'string' && typeof days === 'string') {
      setTravelogueQuery({ travelogueId, days });
    }
  }, [router.isReady, router.query]);

  return (
    <Box sx={layout}>
      <SubTravelogue travelogueQuery={travelogueQuery} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StepperButton format='backward' steps={steps} setSteps={setSteps} />
        <StepperButton format='complete' steps={steps} setSteps={setSteps} />
      </Box>
    </Box>
  );
};

export default SubTraveloguePage;

const layout = { padding: '0 24px' };
