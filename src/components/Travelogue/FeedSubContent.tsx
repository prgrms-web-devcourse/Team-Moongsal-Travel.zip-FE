import { Box, Typography } from '@mui/material';

import { FeedContentProps } from './FeedContent';

const FeedSubContent = ({
  nights,
  days,
}: Omit<FeedContentProps, 'title' | 'totalCost'>) => {
  return (
    <>
      <Typography
        component='div'
        sx={{ fontSize: 0.75, fontWeight: 'bold', color: 'gray030.main', pr: 0.5 }}>
        기간
      </Typography>
      <Box
        sx={{
          py: 0.15,
          px: 0.5,
          borderRadius: 7,
          bgcolor: 'gray020.main',
          display: 'flex',
          alignItems: 'center',
          mr: 0.5,
        }}>
        <Typography component='span' fontSize={0.75} color='blue050.main'>
          {`${nights}박 ${days}일`}
        </Typography>
      </Box>
    </>
  );
};

export default FeedSubContent;
