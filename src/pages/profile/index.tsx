import { Divider, Stack } from '@mui/material';
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
    <Stack sx={{ mb: '50px' }}>
      <Management handleOpenEditModal={() => setIsOpen(true)} />
      <Divider sx={{ px: '15px' }} />
      <Stack spacing={3} alignItems='center' width='100%'>
        <WrittenByMeTravelogues />
        <TemporarySaveTravelogues />
      </Stack>
      <EditDrawer isOpen={isOpen} handleCloseEditModal={() => setIsOpen(false)} />
    </Stack>
  );
};

export default Profile;
