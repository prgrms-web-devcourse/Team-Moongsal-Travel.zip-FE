import { Box, Typography } from '@mui/material';

interface FeedSubContent {
  chipTitle: '기간' | '총 경비';
  chipContent: string;
}

const FeedChip = ({ chipTitle, chipContent }: FeedSubContent) => {
  return (
    <>
      <Typography
        component='div'
        sx={{ fontSize: 0.75, fontWeight: 'bold', color: 'gray030.main', pr: 0.5 }}>
        {chipTitle}
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
          {chipContent}
        </Typography>
      </Box>
    </>
  );
};

export default FeedChip;
