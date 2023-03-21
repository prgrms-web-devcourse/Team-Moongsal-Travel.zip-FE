import SwipeSlider from '@/components/common/SwipeSlider';
import { useGetBaseTravelogueList } from '@/hooks/query/main';

const PopularFeedList = () => {
  const { data: popularTravelogues } = useGetBaseTravelogueList({
    page: 0,
    size: 5,
    sortedType: 'viewCount,desc',
    type: 'recent',
  });

  if (!popularTravelogues || popularTravelogues.length === 0) {
    return null;
  }

  return <SwipeSlider travelogues={popularTravelogues} title='인기 여행 일지' autoplay />;
};

export default PopularFeedList;
