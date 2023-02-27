import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

import useGetUserForms from '@/components/Register/useGetUserForms';
import { UserRegisterForm } from '@/pages/auth/register';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface RegisterProps {
  methods: UseFormReturn<UserRegisterForm>;
}

const Register = ({ methods }: RegisterProps) => {
  const calcYearOfBirthList = () => {
    return Array(80)
      .fill(new Date().getFullYear() - 7)
      .map((year, i) => (
        <MenuItem key={i} value={year - i}>
          {year - i}
        </MenuItem>
      ));
  };

  const {
    nickname,
    nicknameState,
    password,
    passwordState,
    passwordConfirm,
    passwordConfirmState,
    birthYear,
    birthYearState,
  } = useGetUserForms(methods.control);

  return (
    <Stack spacing={2}>
      <TextField
        {...nickname}
        id='outlined-basic'
        placeholder='닉네임 2~12자 한글/영문'
        label='닉네임'
        variant='outlined'
        helperText={nicknameState.error && nicknameState.error.message}
      />
      <TextField
        {...password}
        id='outlined-basic'
        placeholder='비밀번호 최소 8자 영문/숫자/특수문자'
        label='비밀번호'
        variant='outlined'
        // type='password'
        helperText={passwordState.error && passwordState.error.message}
      />
      <TextField
        {...passwordConfirm}
        id='outlined-basic'
        label='비밀번호 확인'
        variant='outlined'
        // type='password'
        helperText={passwordConfirmState.error && passwordConfirmState.error.message}
      />
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>출생연도</InputLabel>
        <Select {...birthYear} label='출생연도' MenuProps={MenuProps}>
          {calcYearOfBirthList()}
        </Select>
        <FormHelperText>
          {birthYearState.error && birthYearState.error.message}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default Register;
