import { Box } from '@mui/material';
import Image from 'next/image';

interface FeedImageProps {
  thumbnailURL: string;
  ImageAlt: string;
}

const FeedImage = ({ thumbnailURL, ImageAlt }: FeedImageProps) => {
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
