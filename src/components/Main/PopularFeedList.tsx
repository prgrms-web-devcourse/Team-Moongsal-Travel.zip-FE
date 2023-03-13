import { useGetRecentTravelogues } from '@/api/hooks/travelogue';
import SwipeSlider from '@/components/common/SwipeSlider';

const PopularFeedList = () => {
  const { data: popularTravelogues } = useGetRecentTravelogues();

  if (!popularTravelogues || popularTravelogues.length === 0) {
    return null;
  }

  return <SwipeSlider travelogues={popularTravelogues} fade />;
};

export default PopularFeedList;
