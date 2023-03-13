import { Chip, Typography } from '@mui/material';

interface FeedSubContent {
  chipTitle: '기간' | '총 경비';
  chipContent: string;
}

const FeedChip = ({ chipTitle, chipContent }: FeedSubContent) => {
  return (
    <>
      <Typography
        component='div'
        sx={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'gray030.main', pr: 0.5 }}>
        {chipTitle}
      </Typography>
      <Chip
        label={chipContent}
        size='small'
        sx={{
          bgcolor: 'gray005.main',
          fontSize: '0.5rem',
          fontWeight: 'bold',
          color: 'blue050.main',
          boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          mr: 0.5,
          p: 0.1,
        }}
      />
    </>
  );
};

export default FeedChip;
