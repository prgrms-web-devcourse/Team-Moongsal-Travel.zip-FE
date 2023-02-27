import { Control, useController } from 'react-hook-form';

import { UserRegisterForm } from '@/pages/auth/register';

export default function useGetUserForms(control: Control<UserRegisterForm>) {
  const { field: email, fieldState: emailState } = useController({
    name: 'email',
    control,
    rules: {
      required: '이메일은 필수 입력입니다.',
      pattern: {
        value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message: '이메일 형식에 맞지 않습니다.',
      },
    },
  });

  const { field: code, fieldState: codeState } = useController({
    name: 'code',
    control,
    rules: {
      required: '인증번호는 필수 입력입니다.',
      pattern: {
        value: /[0-9]{6}/,
        message: '인증번호 형식에 맞지 않습니다.',
      },
    },
  });

  const { field: nickname, fieldState: nicknameState } = useController({
    name: 'nickname',
    control,
    rules: {
      required: '닉네임은 필수 입력입니다.',
      pattern: {
        value: /^[가-힣|a-zA-Z]{2,12}$/,
        message: '닉네임 형식에 맞지 않습니다.',
      },
    },
  });

  const { field: password, fieldState: passwordState } = useController({
    name: 'password',
    control,
    rules: {
      required: '비밀번호는 필수 입력입니다.',
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,}$/,
        message: '비밀번호 형식에 맞지 않습니다.',
      },
    },
  });

  const { field: passwordConfirm, fieldState: passwordConfirmState } = useController({
    name: 'passwordConfirm',
    control,
    rules: {
      required: '비밀번호 확인은 필수 입력입니다.',
      validate: (value) =>
        value === password.value ? true : '비밀번호가 일치하지 않습니다.',
    },
  });

  const { field: birthYear, fieldState: birthYearState } = useController({
    name: 'birthYear',
    control,
    rules: { required: '출생연도는 필수 입력입니다.' },
  });

  return {
    email,
    emailState,
    code,
    codeState,
    nickname,
    nicknameState,
    password,
    passwordState,
    passwordConfirm,
    passwordConfirmState,
    birthYear,
    birthYearState,
  };
}
