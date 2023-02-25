// import { useRouter } from 'next/router';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

import { PostBasic, PostDetail } from '@/components/CreatePost';

const Post = () => {
  const [steps, setSteps] = useState(0);

  return (
    <Box sx={layout}>
      {!steps ? (
        <>
          <PostBasic />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant='contained'
              sx={{ display: 'flex', alignItems: 'center' }}
              onClick={() => setSteps(steps + 1)}>
              <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
                작성
              </Typography>
              {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
            </Button>
          </Box>
        </>
      ) : (
        <>
          <PostDetail />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant='contained'
              sx={{ display: 'flex', alignItems: 'center' }}
              onClick={() => setSteps(steps - 1)}>
              {<ArrowBackIosNewIcon sx={{ fontSize: '0.5rem' }} />}
              <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
                이전
              </Typography>
            </Button>
            <Button
              variant='contained'
              sx={{ display: 'flex', alignItems: 'center' }}
              onClick={() => setSteps(steps + 1)}>
              <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
                작성
              </Typography>
              {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
