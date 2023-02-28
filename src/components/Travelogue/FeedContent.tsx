import styled from '@emotion/styled';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';

import FeedSubContent from './FeedSubContent';

export interface FeedContentProps {
  title: string;
  nights: number;
  days: number;
  totalCost: number;
}

interface RowProps {
  justifyContentType: string;
}

const FeedContent = ({ title, nights, days, totalCost }: FeedContentProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  console.log(totalCost);

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
        <FeedSubContent nights={nights} days={days} />
        <FeedSubContent nights={nights} days={days} />
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

const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContentType }) => justifyContentType};
  width: '100%';
`;

export default FeedContent;
