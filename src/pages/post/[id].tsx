// import { useRouter } from 'next/router';

import { Box } from '@mui/material';

import { PostDetail } from '@/components/CreatePost';

const Post = () => {
  return (
    <Box sx={layout}>
      {/* <PostBasic />
      <br />
      <br />
      <br /> */}
      <PostDetail />
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
