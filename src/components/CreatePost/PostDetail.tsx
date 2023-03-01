import { AddCircle } from '@mui/icons-material';
import { Button, IconButton, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import { usePostSubTravelogue } from '@/api/hooks/post';
import { SubTitle, Title } from '@/components/common';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { SubTravelogueForm } from '@/types/post';

import { Location, Transportation } from './';

const PostDetail = () => {
  const [formats, setFormats] = useState<string[]>(() => []);
  const { control, handleSubmit } = useForm<SubTravelogueForm>({
    defaultValues: {
      title: '',
      content: '',
      addresses: [{ country: '', city: '', spot: '' }],
      transports: Array.from({ length: 7 }, () => ({ transport: '' })),
    },
  });
  const { title, content } = useSubTravelogueForm(control);
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });
  const { mutate } = usePostSubTravelogue();

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handlePostSubTravelogue = (data: SubTravelogueForm) => {
    const { title, content, addresses, transports } = data;
    const transportationSet = transports
      .filter(({ transport }) => transport !== '')
      .map(({ transport }) => transport);
    const subData = {
      title,
      content,
      addresses,
      transportationSet,
      travelPhotoCreateReqs: [{ url: 'temp' }],
    };
    console.log(JSON.stringify(subData));
    mutate({ data: subData, travelogueId: '14' });
  };

  return (
    <form onSubmit={handleSubmit(handlePostSubTravelogue)}>
      <Title>1일차</Title>
      <Stack sx={marginBottom}>
        <SubTitle>소제목</SubTitle>
        <OutlinedInput {...title} fullWidth placeholder='제목을 입력하세요' type='text' />
      </Stack>
      <Stack sx={marginBottom} component='ul'>
        <Stack direction='row' alignItems='center'>
          <SubTitle>방문한 장소</SubTitle>
          <IconButton
            color='primary'
            component='label'
            onClick={() => append({ country: '', city: '', spot: '' })}>
            <AddCircle />
          </IconButton>
        </Stack>
        {fields.map((item, index) => {
          return (
            <Stack key={item.id} direction='row' spacing={2} component='li'>
              <Controller
                render={({ field }) => <Location field={field} />}
                name={`addresses.${index}.spot`}
                control={control}
              />
              <Button
                type='button'
                variant='outlined'
                sx={{ width: '60px', height: '56px' }}
                onClick={() => remove(index)}>
                삭제
              </Button>
            </Stack>
          );
        })}
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>이동수단</SubTitle>
        <Transportation control={control} value={formats} handleFormat={onFormatChange} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor {...content}></Editor>
      </Stack>
      <button type='submit'>임시 제출 버튼</button>
    </form>
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
