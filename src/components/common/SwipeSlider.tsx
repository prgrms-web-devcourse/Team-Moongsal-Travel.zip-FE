import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Stack, SxProps, Theme } from '@mui/material';
import Slider from 'react-slick';

import { Title } from '@/components/common';
import { TravelogueFeed } from '@/components/Travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

interface SwipeSliderProps {
  travelogues: TravelogueFeedType[];
  title: string;
  customSx?: SxProps<Theme>;
  fade?: boolean;
  autoplay?: boolean;
  isTemp?: boolean;
}

const SwipeSlider = ({
  travelogues,
  title,
  customSx,
  fade = false,
  autoplay = false,
  isTemp = false,
}: SwipeSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade,
    autoplay,
  };

  return (
    <Stack component='section' sx={{ p: '1rem 0 3rem 0', ...customSx }}>
      <Title bold='bold' fontSize='1.4rem' color='dark.main' sx={{ ml: '15px' }}>
        {title}
      </Title>
      <Slider {...settings}>
        {travelogues.map((travelogue) => (
          <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} isTemp={isTemp} />
        ))}
      </Slider>
    </Stack>
  );
};

export default SwipeSlider;
