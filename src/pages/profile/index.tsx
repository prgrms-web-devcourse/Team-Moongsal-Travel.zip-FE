import { Stack } from '@mui/material';
import { useState } from 'react';

import { useUserInformation } from '@/api/hooks/profile';
import {
  EditDrawer,
  Management,
  TemporarySaveTravelogues,
  WrittenByMeTravelogues,
} from '@/components/Profile';

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
        <WrittenByMeTravelogues />
        <TemporarySaveTravelogues />
      </Stack>
      <EditDrawer isOpen={isOpen} handleCloseEditModal={() => setIsOpen(false)} />
    </Stack>
  );
};

export default Profile;
