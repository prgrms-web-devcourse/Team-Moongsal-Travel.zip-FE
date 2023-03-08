import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

export interface FormControlType<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export type ButtonEventType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
