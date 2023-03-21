import { Stack } from '@mui/material';

import { AuthHeader } from '@/components/auth';
import { Local } from '@/components/auth/Login';

const LoginPage = () => {
  return (
    <Stack spacing={5} sx={{ paddingBottom: '50px' }}>
      <AuthHeader text='Log In' />
      <Local />
    </Stack>
  );
};

export default LoginPage;
