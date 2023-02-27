import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

import { usePostSendEmail, usePostVerifyCode } from '@/api/hooks/user';
import useGetUserForms from '@/components/Register/useGetUserForms';
import { VerifyRegisterForm } from '@/pages/auth/register';

interface VerifyEmailProps {
  methods: UseFormReturn<VerifyRegisterForm>;
  setActivateNext: (activate: boolean) => void;
}

const VerifyByEmail = ({ methods, setActivateNext }: VerifyEmailProps) => {
  const sendEmail = usePostSendEmail();
  const { mutate } = usePostVerifyCode();

  const { email, emailState, code, codeState } = useGetUserForms({
    control: methods.control,
  });

  const handleSendEmail = () => {
    sendEmail.mutate(
      { email: email.value },
      {
        onSuccess: () => console.log('인증 코드 요청 성공'),
      },
    );
  };

  const handleVerifyCode = () => {
    mutate(
      {
        email: email.value,
        code: code.value,
      },
      {
        onSuccess: () => {
          console.log('인증 코드 검증 성공');
          setActivateNext(true);
        },
      },
    );
  };

  console.log('1단계 렌더링')

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <TextField
          {...email}
          id='outlined-basic'
          label='이메일'
          variant='outlined'
          fullWidth
          helperText={emailState.error && emailState.error.message}
        />
        <Button
          variant='contained'
          endIcon={<SendIcon />}
          sx={{ width: '150px', height: '56px' }}
          onClick={handleSendEmail}>
          인증번호
        </Button>
      </Stack>
      {true && (
        <Stack direction='row' spacing={2}>
          <TextField
            {...code}
            id='outlined-basic'
            label='인증번호'
            variant='outlined'
            fullWidth
            helperText={codeState.error && codeState.error.message}
          />
          <Button
            variant='contained'
            sx={{ width: '150px', height: '56px' }}
            onClick={handleVerifyCode}>
            확인
          </Button>
        </Stack>
      )}
    </Stack>
  );
};

export default VerifyByEmail;
