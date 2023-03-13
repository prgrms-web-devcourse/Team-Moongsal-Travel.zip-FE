import { Stack } from '@mui/material';

import { AuthHeader } from '@/components/common';
import { Local } from '@/components/Login';

const LoginPage = () => {
  return (
    <Stack spacing={5} sx={{ paddingBottom: '50px' }}>
      <AuthHeader text='Log In' />
      <Local />
    </Stack>
  );
};

export default LoginPage;
