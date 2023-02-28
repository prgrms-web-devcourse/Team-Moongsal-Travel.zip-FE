import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController } from 'react-hook-form';

import { FormControlType } from '@/types/common';

type InputProps<T extends FieldValues> = FormControlType<T> & TextFieldProps;

const CommonInput = <T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: InputProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <TextField
      value={value}
      onChange={onChange}
      helperText={error && error.message}
      {...props}
    />
  );
};

export default CommonInput;
