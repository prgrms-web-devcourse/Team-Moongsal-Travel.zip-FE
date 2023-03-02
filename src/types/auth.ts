export interface User {
  email: string;
  password: string;
}

export interface UserRegister extends User {
  nickname: string;
  birthYear: string;
}

export interface VerifyNickname {
  isDuplicated: boolean;
}
