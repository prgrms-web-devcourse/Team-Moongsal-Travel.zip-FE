import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { Control } from 'react-hook-form';

import { usePostSendEmail, usePostVerifyCode } from '@/api/hooks/user';
import useGetUserForms from '@/components/Register/useGetUserForms';
import { UserRegisterForm } from '@/pages/auth/register';

interface VerifyEmailProps {
  control: Control<UserRegisterForm>;
  setAuthSuccess: (success: boolean) => void;
}

const VerifyByEmail = ({ control, setAuthSuccess }: VerifyEmailProps) => {
  const sendEmail = usePostSendEmail();
  const verifyCode = usePostVerifyCode();
  const { email, emailState, code, codeState } = useGetUserForms(control);
  const [prevCode, setPrevCode] = useState('0');

  const handleSendEmail = () => {
    sendEmail.mutate({ email: email.value });
  };

  const handleVerifyCode = () => {
    verifyCode.mutate(
      {
        email: email.value,
        code: code.value,
      },
      {
        onSuccess: () => setAuthSuccess(true),
        onError: () => setAuthSuccess(false),
        onSettled: () => setPrevCode(code.value),
      },
    );
  };

  const failText = () => {
    if (verifyCode.isError && prevCode === code.value) {
      return '인증번호가 일치하지 않습니다.';
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <TextField
          {...email}
          id='outlined-basic'
          label='이메일'
          variant='outlined'
          fullWidth
          helperText={
            emailState.error
              ? emailState.error.message
              : sendEmail.isSuccess && '3분 이내로 인증번호(6자리)를 입력해주세요.'
          }
        />
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          sx={{ width: '150px', height: '56px' }}
          disabled={verifyCode.isSuccess}
          onClick={handleSendEmail}>
          인증번호
        </Button>
      </Stack>
      {sendEmail.isSuccess && (
        <Stack direction='row' spacing={2}>
          <TextField
            {...code}
            id='outlined-basic'
            label='인증번호'
            variant='outlined'
            fullWidth
            helperText={codeState.error ? codeState.error.message : failText()}
          />
          <Button
            variant='contained'
            sx={{ width: '150px', height: '56px' }}
            disabled={verifyCode.isSuccess}
            onClick={handleVerifyCode}>
            확인
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default VerifyByEmail;
