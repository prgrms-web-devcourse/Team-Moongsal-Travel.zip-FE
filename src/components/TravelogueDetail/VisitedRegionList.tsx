import {
  LocationOn as LocationOnIcon,
  PushPin as PushPinIcon,
} from '@mui/icons-material';
import { Chip, Divider, Stack, Typography } from '@mui/material';

interface VisitedRegionProps {
  addresses: { region: string }[];
}

const VisitedRegionList = ({ addresses }: VisitedRegionProps) => {
  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Stack direction='row' spacing={0.5} alignItems={'center'} sx={{ mb: 1.5 }}>
        <PushPinIcon color={'blue050'} sx={{ width: '16px' }} />
        <Typography variant='subtitle1' color='dark.main'>
          방문한 장소
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {addresses.map(({ region }, i) => (
          <Chip
            key={i}
            variant='outlined'
            color='primary'
            icon={<LocationOnIcon sx={{ width: '17px' }} />}
            label={region}
          />
        ))}
      </Stack>
    </>
  );
};

export default VisitedRegionList;
