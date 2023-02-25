// import { useRouter } from 'next/router';

import { Box } from '@mui/material';

import PostBasic from '@/components/CreatePost/PostBasic';

const Post = () => {
  return (
    <Box sx={layout}>
      <PostBasic />
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
