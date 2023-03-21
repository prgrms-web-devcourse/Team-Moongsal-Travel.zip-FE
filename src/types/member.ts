export interface UserInformationPatchType {
  nickname: string;
  profileImageUrl: string;
}

export type UserInformationType = {
  email: string;
  birthYear: string;
  errorMessage?: string | null;
} & UserInformationPatchType;
