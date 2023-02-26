import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

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

const Register = () => {
  const [yearOfBirth, setYearOfBirth] = useState('');

  const handleYearOfBirth = (e: SelectChangeEvent) => {
    setYearOfBirth(e.target.value);
  };

  const calcYearOfBirthList = () => {
    return Array(80)
      .fill(new Date().getFullYear() - 7)
      .map((year, i) => (
        <MenuItem key={i} value={year - i}>
          {year - i}
        </MenuItem>
      ));
  };

  return (
    <Stack spacing={2}>
      <TextField id='outlined-basic' label='닉네임' variant='outlined' />
      <TextField id='outlined-basic' label='비밀번호' variant='outlined' />
      <TextField id='outlined-basic' label='비밀번호 확인' variant='outlined' />
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>출생연도</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={yearOfBirth}
          label='출생연도'
          MenuProps={MenuProps}
          onChange={handleYearOfBirth}>
          {calcYearOfBirthList()}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Register;
