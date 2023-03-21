import { Divider, Stack } from '@mui/material';
import { useState } from 'react';

import {
  EditDrawer,
  Management,
  TemporarySaveTravelogues,
  WrittenByMeTravelogues,
} from '@/components/member';
import { useUserInformation } from '@/hooks/query/member';

const MemberPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading } = useUserInformation();

  if (isLoading) {
    return null;
  }

  return (
    <Stack sx={{ mb: '50px' }}>
      <Management handleOpenEditModal={() => setIsOpen(true)} />
      <Divider sx={{ px: '15px' }} />
      <Stack spacing={3} width='100%'>
        <WrittenByMeTravelogues />
        <TemporarySaveTravelogues />
      </Stack>
      <EditDrawer isOpen={isOpen} handleCloseEditModal={() => setIsOpen(false)} />
    </Stack>
  );
};

export default MemberPage;
