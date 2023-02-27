import { Box, Stack } from '@mui/material';

import { PostContents, PostInfo } from '@/components/PostDetail';

const Detail = () => {
  const authority = 'writer';
  // const authority = 'viewer';
  return (
    <Box sx={layout}>
      <Stack spacing={5}>
        <PostInfo authority={authority} />
        <PostContents />
      </Stack>
    </Box>
  );
};

export default Detail;

const layout = { padding: '0 24px' };
