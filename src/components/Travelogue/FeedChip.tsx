import { Chip, Stack, Typography } from '@mui/material';

interface FeedSubContent {
  chipTitle: '기간' | '총 경비';
  chipContent: string;
}

const FeedChip = ({ chipTitle, chipContent }: FeedSubContent) => {
  return (
    <Stack direction='row' alignItems={'center'} spacing={0.5}>
      <Typography
        component='div'
        sx={{
          fontSize: '14px',
          color: 'gray030.main',
        }}>
        {chipTitle}
      </Typography>
      <Chip
        label={chipContent}
        size='small'
        sx={{
          bgcolor: 'gray005.main',
          fontSize: '11px',
          fontWeight: 'bold',
          color: 'blue050.main',
        }}
      />
    </Stack>
  );
};

export default FeedChip;
