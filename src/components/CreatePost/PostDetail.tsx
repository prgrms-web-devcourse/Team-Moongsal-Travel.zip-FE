import { Box, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import { SubTitle, Title } from '@/components/common';

import { Location, Transportation } from './';

const PostDetail = () => {
  const [formats, setFormats] = useState<string[]>(() => []);

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  return (
    <>
      <Title>1일차</Title>
      <SubTitle>소제목</SubTitle>
      <Box sx={marginBottom}>
        <OutlinedInput fullWidth placeholder='제목을 입력하세요' type='text' />
      </Box>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 도시</SubTitle>
        <Location />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>방문한 장소</SubTitle>
        <Location />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>이동수단</SubTitle>
        <Transportation value={formats} handleFormat={onFormatChange} />
      </Stack>

      <Stack sx={marginBottom}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor></Editor>
      </Stack>
    </>
  );
};

export default PostDetail;

const marginBottom = {
  marginBottom: '1rem',
};

const Editor = styled('textarea')(({ theme }) => ({
  height: '20rem',
  width: '100%',
  resize: 'none',
  overflowY: 'auto',
  outlineColor: theme.palette.blue050.main,
}));
