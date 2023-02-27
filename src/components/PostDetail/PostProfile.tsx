import { VisibilityOutlined } from '@mui/icons-material';
import { Avatar, Box } from '@mui/material';

import { SubTitle } from '@/components/common';

const dummyData = [
  {
    subtitle: '닉네임',
    component: Avatar,
  },
  {
    subtitle: '123123회',
    component: VisibilityOutlined,
  },
];

const PostProfile = () => {
  return (
    <>
      {dummyData.map(({ subtitle, component }) => (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }} key={subtitle}>
          <Box
            component={component}
            sx={{
              width: '1rem',
              height: '1rem',
              color: 'gray030.main',
              src: 'default',
            }}
          />
          <SubTitle fontSize='0.8rem' color='gray030.main'>
            {subtitle}
          </SubTitle>
        </Box>
      ))}
    </>
  );
};

export default PostProfile;
