import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Box, Button, IconButton, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { usePostSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { subTravelogueFormProps } from '@/constants/defaultFormValue';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { ButtonEventType } from '@/types/common';
import { StepType, SubTravelogueType } from '@/types/post';

import { Location, Transportation } from '.';

interface SubTravelogueProps {
  travelogueId: string;
  isLastStep: boolean;
  index: number;
  handleStep: (e: ButtonEventType, type: StepType) => void;
}

const SubTravelogue = ({
  travelogueId,
  isLastStep,
  index,
  handleStep,
}: SubTravelogueProps) => {
  const { control, handleSubmit, watch, setValue } =
    useForm<SubTravelogueType>(subTravelogueFormProps);
  const { title, content, transportationSet } = useSubTravelogueForm(control);
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });
  const { mutate } = usePostSubTravelogue();
  useFormPersist(`travelogue-${travelogueId}-${index}`, { watch, setValue });

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setValue('transportationSet', newFormats);
  };

  const handlePostSubTravelogue = (data: SubTravelogueType) => {
    mutate({ data, travelogueId });
  };

  return (
    <form onSubmit={handleSubmit(handlePostSubTravelogue)}>
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
        <Transportation value={transportationSet.value} handleFormat={onFormatChange} />
      </Stack>
      <Stack sx={marginBottom}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor {...content}></Editor>
      </Stack>
      <Box sx={{ mb: 2 }}>
        <div>
          <Button
            type='submit'
            variant='contained'
            onClick={(e) => handleStep(e, 'next')}
            sx={{ mt: 1, mr: 1 }}>
            {isLastStep ? '완료' : '다음'}
          </Button>
          <Button
            type='button'
            disabled={index === 0}
            onClick={(e) => handleStep(e, 'back')}
            sx={{ mt: 1, mr: 1 }}>
            이전
          </Button>
        </div>
      </Box>
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
