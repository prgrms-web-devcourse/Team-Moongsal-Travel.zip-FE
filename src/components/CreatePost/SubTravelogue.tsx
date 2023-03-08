import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Alert, Box, Button, IconButton, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { usePostSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { subTravelogueFormDefault } from '@/constants/defaultFormValue';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { SubTravelogueType } from '@/types/post';
import { getItem, setItem } from '@/utils/storage';

import { Location, Transportation } from '.';

interface SubTravelogueProps {
  travelogueId: string;
  index: number;
  handleComplete: (isValid?: boolean) => void;
}

const SubTravelogue = ({ travelogueId, index, handleComplete }: SubTravelogueProps) => {
  const saveData = getItem<SubTravelogueType>(`save-${travelogueId}-${index}`);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isDirty, errors },
  } = useForm<SubTravelogueType>({
    defaultValues: saveData ?? subTravelogueFormDefault,
  });
  const { title, content, transportationSet } = useSubTravelogueForm(control);
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });
  const { mutate } = usePostSubTravelogue();
  useFormPersist(`temp-${travelogueId}-${index}`, {
    watch,
    setValue,
  });
  const fieldValue = watch();
  const isFormEmpty =
    JSON.stringify(fieldValue) === JSON.stringify(subTravelogueFormDefault);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!isFormEmpty) {
      handleComplete(isDirty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDirty]);

  const onFormatChange = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setValue('transportationSet', newFormats);
  };

  const handlePostSubTravelogue = (data: SubTravelogueType) => {
    console.log('data', data);
    mutate(
      { data, travelogueId },
      {
        onSuccess: (response) => {
          reset(data);
          setItem(`save-${travelogueId}-${index}`, data);
          console.log(response);
          setSaved(true);
        },
      },
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlePostSubTravelogue)}>
        <Stack sx={marginBottom}>
          <SubTitle>소제목</SubTitle>
          <OutlinedInput
            {...title}
            fullWidth
            placeholder='소제목을 입력하세요'
            type='text'
            disabled={saved}
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
                render={({ field }) => <Location field={field} disabled={saved} />}
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
          <Transportation
            value={transportationSet.value}
            disabled={saved}
            handleFormat={onFormatChange}
          />
        </Stack>
        <Stack sx={marginBottom}>
          <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
          <Editor {...content} disabled={saved}></Editor>
        </Stack>
        <Box sx={{ mb: 2 }}>
          {Object.keys(errors).length > 0 && (
            <Alert severity='error'>모든 정보를 입력해주세요.</Alert>
          )}
          {isDirty && <Alert severity='info'>저장되지 않은 변경사항이 있습니다.</Alert>}
          <Button type='submit' variant='outlined' fullWidth sx={{ mt: 1, mr: 1 }}>
            저장
          </Button>
        </Box>
      </form>
    </>
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
