import { atom } from 'recoil';
import { v4 } from 'uuid';

export const isHeaderOpenState = atom({
  key: `isHeaderOpen/${v4()}`,
  default: false,
});
