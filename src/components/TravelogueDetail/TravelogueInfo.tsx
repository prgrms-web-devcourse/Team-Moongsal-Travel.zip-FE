import { Visibility as VisibilityIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

import { SubTitle } from '@/components/common';
import UserProfile from '@/components/common/UserProfile';
import { TravelogueDetailType } from '@/types/travelogue';

interface PostProfileProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueInfo = ({ travelogueDetail }: PostProfileProps) => {
  const { nickname, viewCount, profileImageUrl } = travelogueDetail;

  return (
    <Stack direction='row' spacing={2}>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={nickname}>
        <UserProfile profileImageUrl={profileImageUrl} nickname={nickname} />
      </Stack>
      <Stack direction='row' spacing={0.5} alignItems={'center'} key={viewCount}>
        <VisibilityIcon sx={{ ...InfoStyle, color: 'gray020.main' }} />
        <SubTitle fontSize='0.9rem' color='gray030.main'>
          {viewCount}
        </SubTitle>
      </Stack>
    </Stack>
  );
};

export default TravelogueInfo;

const InfoStyle = { width: 20, height: 20 };
