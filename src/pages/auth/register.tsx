import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { usePostUserRegister } from '@/api/hooks/user';
import { UserRegister } from '@/api/user/type';
import { Register, VerifyByEmail } from '@/components/Register';
import Test from '@/components/Register/Test';
import { Stepper } from '@/components/Stepper';

const steps = ['이메일 인증', '회원가입'];

const testData = {
  email: 'testb@gmail.com',
  password: 'qwe123!@#',
  nickname: 'testb',
  birthYear: '1997',
};

export type VerifyRegisterForm = UserRegister & {
  code: string;
  passwordConfirm: string;
};

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  // const { mutate: userRegisterMutate } = usePostUserRegister();

  const methods = useForm<VerifyRegisterForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      birthYear: '',
    },
  });
  console.log('methods watch', methods.watch());

  const [activateNext, setActivateNext] = useState(false);

  const handleRegister = () => {
    // userRegisterMutate(testData, {
    //   onSuccess: () => {
    //     console.log('post test 성공');
    //   },
    // });
    console.log('onSubmit');
  };

  return (
    <Stack spacing={1}>
      <Typography component='h1' variant='h4'>
        ✈️ travel.zip 회원가입
      </Typography>
      <form
        onSubmit={methods.handleSubmit(() => {
          console.log('폼 제출 완료');
        })}>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          onSubmit={handleRegister}
          activateNext={activateNext}>
          {!activeStep ? (
            <VerifyByEmail methods={methods} setActivateNext={setActivateNext} />
          ) : (
            <Register methods={methods} />
            // <Test />
          )}
        </Stepper>
      </form>
    </Stack>
  );
};

export default RegisterPage;

/**
 * 리렌더링 조건
 * 자기 state, 부모 props or state 변경되면 수행
 */
