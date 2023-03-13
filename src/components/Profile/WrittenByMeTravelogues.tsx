import { Box } from '@mui/system';

import { useGetWrittenByMeTravelogues } from '@/api/hooks/travelogue';
import { SwipeSlider } from '@/components/common';

const WrittenByMeTravelogues = () => {
  const { data: travelogues } = useGetWrittenByMeTravelogues();

  if (!travelogues || travelogues.length === 0) {
    return null;
  }

  return (
    <Box sx={{ width: 414 }}>
      <SwipeSlider travelogues={travelogues} title='내가 작성한 여행 일지' />
    </Box>
  );
};

export default WrittenByMeTravelogues;
