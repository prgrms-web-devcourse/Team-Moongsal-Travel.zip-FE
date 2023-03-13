import { Box } from '@mui/material';

import { useGetTemporarySaveTravelogues } from '@/api/hooks/travelogue';
import { SwipeSlider } from '@/components/common';

const TemporarySaveTravelogues = () => {
  const { data: travelogues } = useGetTemporarySaveTravelogues();

  if (!travelogues || travelogues.length === 0) {
    return null;
  }

  return (
    <Box sx={{ width: 414 }}>
      <SwipeSlider travelogues={travelogues} title='임시 저장 여행 일지' />
    </Box>
  );
};

export default TemporarySaveTravelogues;
