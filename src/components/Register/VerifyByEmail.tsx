import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const VerifyByEmail = () => {
  const [isSended, setIsSended] = useState(false);

  const handleClick = () => {
    setIsSended(true);
  };

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <TextField id='outlined-basic' label='이메일' variant='outlined' fullWidth />
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          sx={{ width: '150px' }}
          onClick={handleClick}>
          인증번호
        </Button>
      </Stack>
      {isSended && (
        <Stack direction='row' spacing={2}>
          <TextField id='outlined-basic' label='인증번호' variant='outlined' fullWidth />
          <Button variant='contained' sx={{ width: '150px' }} onClick={handleClick}>
            인증확인
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default VerifyByEmail;
