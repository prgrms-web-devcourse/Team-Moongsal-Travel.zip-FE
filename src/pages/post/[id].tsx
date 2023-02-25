// import { useRouter } from 'next/router';

import { Box } from '@mui/material';

import { PostBasic, PostDetail } from '@/components/CreatePost';

const Post = () => {
  return (
    <Box sx={layout}>
      <PostBasic />
      <PostDetail />
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
