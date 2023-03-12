import { Control, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';

import { PATH_ROUTER } from '@/constants/path';

export interface FormControlType<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}

export type PathRouterType = keyof typeof PATH_ROUTER;
