import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import UserProfile from '@/components/common/UserProfile';
import { fontStyle } from '@/styles/commonStyle';
import { TravelogueDetailType } from '@/types/travelogue';

interface PostProfileProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueInfo = ({ travelogueDetail }: PostProfileProps) => {
  const { nickname, viewCount, profileImageUrl } = travelogueDetail;

  return (
    <Stack direction='row' spacing={2} my={1}>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={nickname}>
        <UserProfile profileImageUrl={profileImageUrl} nickname={nickname} />
      </Stack>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={viewCount}>
        <VisibilityIcon sx={{ width: 22, height: 22, color: 'blue070.main' }} />
        <Typography component='span' sx={fontStyle}>
          {viewCount}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default TravelogueInfo;
