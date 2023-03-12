import { Add as AddIcon } from '@mui/icons-material';
import { Box, Button, Stack, TextField } from '@mui/material';

import { ProfileAvatar } from '@/components/common';
import { flexCenterStyle } from '@/styles/commonStyle';
import { UserInformationPatchType } from '@/types/profile';

type EditFormProps = {
  isLoading: boolean;
} & UserInformationPatchType;

const EditForm = ({ profileImageUrl, nickname, isLoading }: EditFormProps) => {
  return (
    <Stack spacing={4} sx={{ ...flexCenterStyle, mt: 12, px: 5 }}>
      <Button sx={{ position: 'relative' }}>
        <ProfileAvatar
          url={profileImageUrl}
          size={100}
          iconSize={5}
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
      </Button>

      <TextField
        id='user-nickname'
        label='닉네임'
        variant='outlined'
        defaultValue={nickname}
        autoFocus
        fullWidth
      />
    </Stack>
  );
};

export default EditForm;
