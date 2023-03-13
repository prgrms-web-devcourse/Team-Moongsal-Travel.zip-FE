import { Stack } from '@mui/material';
import { useState } from 'react';

import { useUserInformation } from '@/api/hooks/profile';
import { ContentLink, EditDrawer, Management } from '@/components/Profile';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useUserInformation();

  if (isLoading) {
    return null;
  }

  return (
    <Stack>
      <Management handleOpenEditModal={() => setIsOpen(true)} />
      <Stack alignItems='center'>
        <ContentLink contentName='내가 작성한 게시물' route='/' iconName='edit' />
        <ContentLink contentName='내가 북마크한 게시물' route='/' iconName='bookmark' />
        <ContentLink
          contentName='임시 저장한 게시글'
          route='/'
          iconName='temporarySave'
        />
      </Stack>
      <EditDrawer isOpen={isOpen} handleCloseEditModal={() => setIsOpen(false)} />
    </Stack>
  );
};

export default Profile;
