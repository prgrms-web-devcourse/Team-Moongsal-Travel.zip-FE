import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import { useGetRecentTravelogue } from '@/api/hooks/travelogue';
import { TravelogueFeed } from '@/components/Travelogue';

const PopularFeed = () => {
  const { data: travelogues } = useGetRecentTravelogue();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!travelogues || travelogues.length === 0) {
    return null;
  }

  return (
    <Slider {...settings}>
      {travelogues.map((travelogue) => {
        return <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />;
      })}
    </Slider>
  );
};

export default PopularFeed;
