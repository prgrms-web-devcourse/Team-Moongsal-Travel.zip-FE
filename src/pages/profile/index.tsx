import { Stack } from '@mui/material';

import { ContentLink, Management } from '@/components/Profile';

const DUMMY_DATA = {
  email: 'dodnjs1241@naver.com',
  nickname: '예오닝',
  birthYear: '1996',
  profileImageUrl: 'default',
};

const Profile = () => {
  return (
    <Stack>
      <Management
        profileImage={DUMMY_DATA.profileImageUrl}
        nickname={DUMMY_DATA.nickname}
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
