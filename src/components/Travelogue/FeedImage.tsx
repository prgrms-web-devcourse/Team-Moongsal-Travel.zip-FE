import { Box } from '@mui/material';
import Image from 'next/image';

import { TravelogueFeedType } from '@/types/travelogue';

interface TravelogueFeedProps {
  thumbnailURL: TravelogueFeedType['thumbnail'];
  ImageAlt: TravelogueFeedType['title'];
}

const FeedImage = ({ thumbnailURL, ImageAlt }: TravelogueFeedProps) => {
  return (
    <Box sx={boxStyle}>
      <Image src={thumbnailURL} fill alt={ImageAlt} />
    </Box>
  );
};

export default FeedImage;

const boxStyle = {
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
  borderRadius: '10px',
};
