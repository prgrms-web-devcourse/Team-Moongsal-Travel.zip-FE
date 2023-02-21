import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import React from 'react';

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
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const calcBirthList = () => {
    return Array(80)
      .fill(new Date().getFullYear() - 10)
      .map((n, i) => (
        <MenuItem key={i} value={n - i}>
          {n - i}
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
          value={age}
          label='출생연도'
          onChange={handleChange}
          MenuProps={MenuProps}>
          {calcBirthList()}
        </Select>
      </FormControl>
      <Button variant='contained'>회원가입</Button>
    </Stack>
  );
};

export default Register;
