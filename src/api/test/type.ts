export type TestType = {
  name: string;
  score: number;
};

export type PatchTestType = {
  id: string;
  patchData: Partial<TestType>;
};
