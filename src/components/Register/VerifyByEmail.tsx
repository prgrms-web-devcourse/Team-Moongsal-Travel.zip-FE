import SendIcon from '@mui/icons-material/Send';
import { Button, Stack, TextField } from '@mui/material';
import { FieldValues, UseFormReturn } from 'react-hook-form';

import { usePostSendEmail, usePostVerifyCode } from '@/api/hooks/user';

interface VerifyEmailProps {
  registerForm: UseFormReturn<FieldValues>;
  setActivateNext: (activate: boolean) => void;
}

const VerifyByEmail = ({ registerForm, setActivateNext }: VerifyEmailProps) => {
  const sendEmail = usePostSendEmail();
  const { mutate } = usePostVerifyCode();

  const handleSendEmail = () => {
    sendEmail.mutate(
      { email: registerForm.getValues('email') },
      {
        onSuccess: () => console.log('인증 코드 요청 성공'),
      },
    );
  };

  const handleVerifyCode = () => {
    mutate(
      {
        email: registerForm.getValues('email'),
        code: registerForm.getValues('code'),
      },
      {
        onSuccess: () => {
          console.log('인증 코드 검증 성공');
          setActivateNext(true);
        },
      },
    );
  };

  console.log(registerForm.formState.errors.email?.message);

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <TextField
          {...registerForm.register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
          id='outlined-basic'
          label='이메일'
          variant='outlined'
          fullWidth
          helperText={
            registerForm.formState.errors.email &&
            (registerForm.formState.errors.email?.message as string)
          }
        />
        <Button
          type='submit'
          variant='contained'
          endIcon={<SendIcon />}
          sx={{ width: '150px', height: '56px' }}
          onClick={handleSendEmail}>
          인증번호
        </Button>
      </Stack>
      {sendEmail.isSuccess && (
        <Stack direction='row' spacing={2}>
          <TextField
            {...registerForm.register('code', {
              required: '인증번호는 필수 입력입니다.',
              pattern: {
                value: /[0-9]{6}/,
                message: '인증번호 형식에 맞지 않습니다.',
              },
            })}
            id='outlined-basic'
            label='인증번호'
            variant='outlined'
            fullWidth
            helperText={
              registerForm.formState.errors.code &&
              (registerForm.formState.errors.code?.message as string)
            }
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
