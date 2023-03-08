import { atom } from 'recoil';
import { v4 } from 'uuid';

export const isHeaderOpenState = atom({
  key: `isOpenState/${v4()}`,
  default: false,
});
