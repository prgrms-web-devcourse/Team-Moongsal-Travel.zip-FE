import { Stack } from '@mui/material';

import { useUserInformation } from '@/api/hooks/profile';
import { ContentLink, Management } from '@/components/Profile';

const Profile = () => {
  const { userInformation, isLoading } = useUserInformation();

  if (!userInformation) {
    return null;
  }

  return (
    <Stack>
      <Management
        profileImage={userInformation.profileImageUrl}
        nickname={userInformation.nickname}
        isLoading={isLoading}
      />
      <Stack alignItems='center'>
        <ContentLink contentName='내가 작성한 게시물' route='/' iconName='edit' />
        <ContentLink contentName='내가 북마크한 게시물' route='/' iconName='bookmark' />
        <ContentLink
          contentName='임시 저장한 게시글'
          route='/'
          iconName='temporarySave'
        />
      </Stack>
    </Stack>
  );
};

export default Profile;
