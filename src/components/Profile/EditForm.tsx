import { Add as AddIcon } from '@mui/icons-material';
import { Box, Stack, TextField } from '@mui/material';

import { useUserInformation } from '@/api/hooks/profile';
import { ProfileAvatar } from '@/components/common';
import { flexCenterStyle, inputStyle } from '@/styles/commonStyle';

const EditForm = () => {
  const {
    userInformation: { nickname, profileImageUrl, errorMessage },
    isLoading,
    handleChangeNickname,
    handleChangeSelectedImage,
  } = useUserInformation();

  return (
    <Stack spacing={4} sx={{ ...flexCenterStyle, mt: 12, px: 5 }}>
      <input
        id='select-profile-image'
        accept='image/*'
        type='file'
        style={{ display: 'none' }}
        onChange={({ target }) => handleChangeSelectedImage(target.files)}
      />
      <label htmlFor='select-profile-image'>
        <Box sx={{ position: 'relative', cursor: 'pointer' }}>
          <ProfileAvatar
            url={profileImageUrl}
            size={100}
            iconSize={100}
            isLoading={isLoading}
          />
          <Box
            sx={{
              position: 'absolute',
              p: 1,
              bgcolor: 'gray010.main',
              borderRadius: '50%',
              bottom: 0,
              right: 0,
              width: 20,
              height: 20,
            }}>
            <AddIcon
              fontSize='small'
              sx={{ color: 'white.main', fontWeight: 'bold', opacity: 0.8 }}
            />
          </Box>
        </Box>
      </label>
      <TextField
        id='user-nickname'
        label='닉네임'
        variant='outlined'
        defaultValue={nickname}
        autoFocus
        autoComplete='off'
        fullWidth
        helperText={errorMessage && errorMessage}
        onChange={({ target }) => handleChangeNickname(target.value)}
        sx={inputStyle}
      />
    </Stack>
  );
};

export default EditForm;
