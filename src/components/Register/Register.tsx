import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Control, UseFormSetError, UseFormTrigger } from 'react-hook-form';

import { postVerifyNickname } from '@/api/user';
import useGetUserForms from '@/hooks/useGetUserForms';
import { UserRegisterForm } from '@/pages/auth/register';
import { InputStyle } from '@/styles/commonStyle';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface RegisterProps {
  control: Control<UserRegisterForm>;
  setValidNickname: (valid: boolean) => void;
  setError: UseFormSetError<UserRegisterForm>;
  trigger: UseFormTrigger<UserRegisterForm>;
}

const Register = ({ control, setValidNickname, setError, trigger }: RegisterProps) => {
  const {
    nickname,
    nicknameState,
    password,
    passwordState,
    passwordConfirm,
    passwordConfirmState,
    birthYear,
    birthYearState,
  } = useGetUserForms(control);

  const calcYearOfBirthList = () => {
    return Array(80)
      .fill(new Date().getFullYear() - 7)
      .map((year, i) => (
        <MenuItem key={i} value={year - i}>
          {year - i}
        </MenuItem>
      ));
  };

  const handleVerifyNickname = async () => {
    if (await trigger('nickname')) {
      try {
        const { isDuplicated } = await postVerifyNickname({
          nickname: nickname.value,
        });
        if (isDuplicated) {
          return setError('nickname', { message: '이미 존재하는 닉네임입니다.' });
        }
        setError('nickname', { message: '사용 가능한 닉네임입니다.' });
        setValidNickname(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={2}>
        <TextField
          {...nickname}
          id='outlined-basic'
          placeholder='닉네임 2~12자 한글/영문'
          label='닉네임'
          variant='outlined'
          fullWidth
          onChange={(e) => {
            nickname.onChange(e.target.value);
            setValidNickname(false);
          }}
          helperText={nicknameState.error && nicknameState.error.message}
          sx={InputStyle}
        />
        <Button variant='contained' sx={ButtonStyle} onClick={handleVerifyNickname}>
          중복확인
        </Button>
      </Stack>
      <TextField
        {...password}
        id='outlined-basic'
        placeholder='비밀번호 최소 8자 영문/숫자/특수문자'
        label='비밀번호'
        variant='outlined'
        type='password'
        helperText={passwordState.error && passwordState.error.message}
        sx={InputStyle}
      />
      <TextField
        {...passwordConfirm}
        id='outlined-basic'
        label='비밀번호 확인'
        variant='outlined'
        type='password'
        helperText={passwordConfirmState.error && passwordConfirmState.error.message}
        sx={InputStyle}
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

const ButtonStyle = {
  width: '150px',
  height: '56px',
  backgroundColor: 'blue070.main',
  fontWeight: '400',
} as const;
