import { Stack } from '@mui/material';

import { Local } from '@/components/auth/Login';
import { AuthHeader } from '@/components/common';

const LoginPage = () => {
  return (
    <Stack spacing={5} sx={{ paddingBottom: '50px' }}>
      <AuthHeader text='Log In' />
      <Local />
    </Stack>
  );
};

export default LoginPage;
