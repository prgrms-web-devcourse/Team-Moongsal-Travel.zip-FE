import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import { Row } from '@/components/common';
import { FeedChip } from '@/components/Travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

type FeedContentProps = Pick<
  TravelogueFeedType,
  'title' | 'nights' | 'days' | 'totalCost'
>;

const FeedContent = ({ title, nights, days, totalCost }: FeedContentProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const CurrentFavoriteIcon = () =>
    isFavorite ? <FavoriteIcon sx={iconStyle} /> : <FavoriteBorderIcon sx={iconStyle} />;

  return (
    <Stack>
      <Row justifyContentType='space-between'>
        <Typography
          sx={{
            ...textEllipsis('85%'),
            fontWeight: 'bold',
          }}>
          {`${title + title + title}`}
        </Typography>
        <Row justifyContentType='space-between'>
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
        </Row>
      </Row>
      <Row justifyContentType='start'>
        <FeedChip chipTitle='기간' chipContent={`${nights}박 ${days}일`} />
        <FeedChip chipTitle='총 경비' chipContent={String(totalCost)} />
      </Row>
    </Stack>
  );
};

const textEllipsis = (width: string | number) => {
  return {
    width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
};

const iconStyle = { fontSize: '1rem', color: 'blue050.main' };

export default FeedContent;
