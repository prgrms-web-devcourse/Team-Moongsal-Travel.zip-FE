import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Stack } from '@mui/material';
import Slider from 'react-slick';

import { Title } from '@/components/common';
import { TravelogueFeed } from '@/components/Travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

interface SwipeSliderProps {
  travelogues: TravelogueFeedType[];
  fade?: boolean;
}

const SwipeSlider = ({ travelogues, fade = false }: SwipeSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    fade,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Stack component='section' sx={{ p: 5 }}>
      <Title bold='bold' fontSize='1.2rem' color='dark.main'>
        인기 여행 일지
      </Title>
      <Slider {...settings}>
        {travelogues.map((travelogue) => {
          return (
            <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />
          );
        })}
      </Slider>
    </Stack>
  );
};

export default SwipeSlider;
