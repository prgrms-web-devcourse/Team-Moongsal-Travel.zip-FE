// import {
//   Favorite as FavoriteIcon,
//   FavoriteBorder as FavoriteBorderIcon,
// } from '@mui/icons-material';
import {
  // IconButton,
  Stack,
  Typography,
} from '@mui/material';

// import { useState } from 'react';
import { Row } from '@/components/common';
import { TravelogueFeedType } from '@/types/main';

import { FeedChip } from '.';

type FeedContentProps = Pick<
  TravelogueFeedType,
  'title' | 'nights' | 'days' | 'totalCost'
>;

const FeedContent = ({ title, nights, days, totalCost }: FeedContentProps) => {
  // const [isFavorite, setIsFavorite] = useState(false);
  // const CurrentFavoriteIcon = () =>
  //   isFavorite ? <FavoriteIcon sx={iconStyle} /> : <FavoriteBorderIcon sx={iconStyle} />;

  return (
    <Stack>
      <Row justifyContentType='space-between'>
        <Typography
          sx={{
            ...textEllipsis('75%'),
            fontWeight: 'bold',
            my: 1.2,
          }}>
          {title}
        </Typography>
        {/* <Row justifyContentType='space-between'>
          <IconButton size='small' onClick={() => setIsFavorite(!isFavorite)}>
            <CurrentFavoriteIcon />
          </IconButton>
          <Typography
            component='span'
            sx={{
              color: 'blue050.main',
              fontSize: '0.75rem',
              pr: 0.5,
              fontWeight: 'bold',
            }}>
            임시
          </Typography>
        </Row> */}
      </Row>
      <Stack direction='row' spacing={1.5} alignItems={'center'}>
        <FeedChip chipTitle='기간' chipContent={`${nights}박 ${days}일`} />
        <FeedChip
          chipTitle='총 경비'
          chipContent={`${totalCost.toLocaleString('ko-KR')}원`}
        />
      </Stack>
    </Stack>
  );
};

export default FeedContent;

// const iconStyle = { fontSize: '1rem', color: 'blue050.main' };

const textEllipsis = (width: string | number) => {
  return {
    width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
};
