import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Button, IconButton, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import { usePostSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { subTravelogueFormProps } from '@/constants/defaultFormValue';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { SubTravelogueFormType } from '@/types/post';

import { Location, Transportation } from '.';

interface SubTravelogueProps {
  travelogueId: string;
}

const SubTravelogue = ({ travelogueId }: SubTravelogueProps) => {
  const [formats, setFormats] = useState<string[]>(() => []);
  const { control, handleSubmit } =
    useForm<SubTravelogueFormType>(subTravelogueFormProps);
  const { title, content } = useSubTravelogueForm(control);
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });
  const { mutate } = usePostSubTravelogue();

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
  };

  const handlePostSubTravelogue = (data: SubTravelogueFormType) => {
    const { title, content, addresses } = data;
    const subData = {
      title,
      content,
      addresses,
      transportationSet: formats,
      travelPhotoCreateReqs: [{ url: 'temp' }],
    };
    formats.length && mutate({ data: subData, travelogueId });
  };

  return (
    <form onSubmit={handleSubmit(handlePostSubTravelogue)}>
      {/* <Title>1일차</Title> */}
      <Stack sx={marginBottom}>
        <SubTitle>소제목</SubTitle>
        <OutlinedInput
          {...title}
          fullWidth
          placeholder='소제목을 입력하세요'
          type='text'
        />
      </Stack>
      <Stack sx={marginBottom} component='ul'>
        <Stack direction='row' alignItems='center'>
          <SubTitle>방문한 장소</SubTitle>
          <IconButton
            color='primary'
            component='label'
            onClick={() => append({ region: '' })}>
            <AddCircleIcon />
          </IconButton>
        </Stack>
        {fields.map((item, index) => (
          <Stack key={item.id} direction='row' spacing={2} component='li'>
            <Controller
              render={({ field }) => <Location field={field} />}
              name={`addresses.${index}.region`}
              control={control}
              rules={{ required: true }}
            />
            <Button
              type='button'
              variant='outlined'
              sx={{ width: '60px', height: '56px' }}
              onClick={() => remove(index)}
              disabled={fields.length === 1}>
              삭제
            </Button>
          </Stack>
        ))}
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>이동수단</SubTitle>
        <Transportation value={formats} handleFormat={onFormatChange} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor {...content}></Editor>
      </Stack>
      <button type='submit'>임시 제출 버튼</button>
    </form>
  );
};

export default SubTravelogue;

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
