import { Box } from '@mui/material';
import { tempPost } from 'public/images';

import { useGetTemporarySaveTravelogues } from '@/api/hooks/travelogue';
import { SwipeSlider } from '@/components/common';
import EmptyData from '@/components/common/EmptyData';

const TemporarySaveTravelogues = () => {
  const { data: travelogues } = useGetTemporarySaveTravelogues();
  const title = '임시 저장 여행 일지';

  if (!travelogues || travelogues.length === 0) {
    return (
      <EmptyData title={title} src={tempPost} text='작성 중인 여행 일지가 없습니다.' />
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <SwipeSlider
        travelogues={travelogues}
        title={title}
        customSx={{ py: 2.5, mb: 5 }}
      />
    </Box>
  );
};

export default TemporarySaveTravelogues;
