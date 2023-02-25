import { Stack } from '@mui/system';

import { useDeleteTest, useGetTest, usePatchTest, usePostTest } from '@/api/hooks/test';

const testId = '4';

const postTestData = {
  name: 'name',
  score: 1,
};

const patchTestData = {
  name: '이름만 수정',
};

export default function Test() {
  const { data: getTestData } = useGetTest(testId);
  const { mutate: postMutate } = usePostTest();
  const { mutate: patchMutate } = usePatchTest();
  const { mutate: deleteMutate } = useDeleteTest();

  const printGetTestData = () => {
    console.log('get test 성공', getTestData);
  };

  const handlePostTest = () => {
    postMutate(postTestData, {
      onSuccess: () => {
        console.log('post test 성공');
      },
    });
  };

  const handlePatchTest = () => {
    patchMutate(
      { id: testId, patchData: patchTestData },
      {
        onSuccess: (data) => {
          console.log('patch test 성공', data);
        },
      },
    );
  };

  const handleDeleteTest = () => {
    deleteMutate(testId, {
      onSuccess: () => {
        console.log('delete test 성공');
      },
    });
  };

  return (
    <Stack>
      <button onClick={printGetTestData}>Print Get Test Data</button>
      <button onClick={handlePostTest}>Post Test</button>
      <button onClick={handlePatchTest}>Patch Test</button>
      <button onClick={handleDeleteTest}>Delete Test</button>
    </Stack>
  );
}
