import { Box } from '@mui/material';

import { Title } from '@/components/common';

import { PostCategory, PostProfile } from './';

interface PostInfo {
  authority: string;
}

const PostInfo = ({ authority }: PostInfo) => {
  return (
    <Box>
      <Title bold='bold'>여기 제목</Title>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <PostProfile />
        </Box>
        {authority === 'writer' && (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <div>수정</div>
            <div>삭제</div>
          </Box>
        )}
      </Box>
      <Box sx={{ width: '80%' }}>
        <PostCategory />
      </Box>
    </Box>
  );
};

export default PostInfo;
