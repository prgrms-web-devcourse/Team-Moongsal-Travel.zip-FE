import { OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SubTitle, Title } from '../common';

const PostComplete = () => {
  return (
    <>
      <Title>마무리</Title>
      <Stack sx={marginBottom}>
        <SubTitle>제목</SubTitle>
        <OutlinedInput fullWidth placeholder='제목을 입력하세요' type='text' />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>썸네일</SubTitle>
        <OutlinedInput fullWidth placeholder='제목을 입력하세요' type='file' />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>미리보기</SubTitle>
        <DummyPreview />
      </Stack>
    </>
  );
};

export default PostComplete;

const marginBottom = {
  marginBottom: '1rem',
};

const DummyPreview = styled('div')(({ theme }) => ({
  height: '20rem',
  backgroundColor: theme.palette.gray020.main,
}));
