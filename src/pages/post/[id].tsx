// import { useRouter } from 'next/router';

import { Box } from '@mui/material';
import { useState } from 'react';

import { PostDetail, StepperButton } from '@/components/CreatePost';

const Post = () => {
  const [steps, setSteps] = useState(0);

  return (
    <Box sx={layout}>
      <PostDetail />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StepperButton format='backward' steps={steps} setSteps={setSteps} />
        <StepperButton format='complete' steps={steps} setSteps={setSteps} />
      </Box>
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
