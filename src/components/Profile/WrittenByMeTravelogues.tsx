import { Box } from '@mui/system';
import { addPost } from 'public/images';

import { useGetWrittenByMeTravelogues } from '@/api/hooks/travelogue';
import { EmptyData, SwipeSlider } from '@/components/common';

const WrittenByMeTravelogues = () => {
  const { data: travelogues } = useGetWrittenByMeTravelogues();
  const title = '내가 작성한 여행 일지';
  if (!travelogues || travelogues.length === 0) {
    return (
      <EmptyData
        title={title}
        src={addPost}
        text='작성 중인 여행 일지가 없습니다.'
        button='작성하러 가기'
        link='/post/first'
      />
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <SwipeSlider
        travelogues={travelogues}
        title='내가 작성한 여행일지'
        customSx={{ py: 2.5 }}
      />
    </Box>
  );
};

export default WrittenByMeTravelogues;
