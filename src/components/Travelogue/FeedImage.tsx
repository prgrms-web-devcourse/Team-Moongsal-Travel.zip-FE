import { Box } from '@mui/material';
import Image from 'next/image';

import { NO_IMAGE_URL } from '@/constants';
import { TravelogueFeedType } from '@/types/travelogue';

interface TravelogueFeedProps {
  thumbnailURL: TravelogueFeedType['thumbnail'];
  ImageAlt: TravelogueFeedType['title'];
}

const FeedImage = ({ thumbnailURL, ImageAlt }: TravelogueFeedProps) => {
  const imageURL =
    thumbnailURL === NO_IMAGE_URL ? '/images/default/no-image.jpg' : thumbnailURL;

  return (
    <Box sx={boxStyle(thumbnailURL === 'default')}>
      <Image src={imageURL} fill alt={ImageAlt} sizes='300px' priority />
    </Box>
  );
};

export default FeedImage;

const boxStyle = (isDefaultImage: boolean) => ({
  opacity: isDefaultImage ? 0.7 : 1,
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '10px',
});
