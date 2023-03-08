import { Alert, Box, Button, OutlinedInput, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { usePostSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { subTravelogueFormDefault } from '@/constants/defaultFormValue';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { SubTravelogueType } from '@/types/post';
import { getItem, setItem } from '@/utils/storage';

import { Transportation, VisitedRegion } from '.';

interface SubTravelogueProps {
  travelogueId: string;
  index: number;
  handleComplete: () => void;
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
  } = useForm<SubTravelogueType>({ defaultValues: saveData ?? subTravelogueFormDefault });
  const { title, content, transportationSet } = useSubTravelogueForm(control);
  const { mutate } = usePostSubTravelogue();
  useFormPersist(`temp-${travelogueId}-${index}`, { watch, setValue });
  const [saved, setSaved] = useState(saveData !== null);
  const hasErrors = Object.keys(errors).length > 0;

  const handlePostSubTravelogue = (data: SubTravelogueType) => {
    mutate(
      { data, travelogueId },
      {
        onSuccess: () => {
          reset(data);
          setItem(`save-${travelogueId}-${index}`, data);
          setSaved(true);
          handleComplete();
        },
      },
    );
  };

  const handleTransportSelect = (
    e: React.MouseEvent<HTMLElement>,
    selected: string[],
  ) => {
    setValue('transportationSet', selected);
  };

  return (
    <form onSubmit={handleSubmit(handlePostSubTravelogue)}>
      <Stack sx={{ mb: '1rem' }}>
        <SubTitle>소제목</SubTitle>
        <OutlinedInput
          {...title}
          fullWidth
          placeholder='소제목을 입력하세요'
          type='text'
          disabled={saved}
        />
      </Stack>
      <VisitedRegion control={control} saved={saved} />
      <Transportation
        value={transportationSet.value}
        disabled={saved}
        onTransportSelect={handleTransportSelect}
      />
      <Stack sx={{ mb: '1rem' }}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <Editor {...content} disabled={saved}></Editor>
      </Stack>
      <Box sx={{ mb: 2 }}>
        {hasErrors && <Alert severity='error'>모든 정보를 입력해주세요.</Alert>}
        {isDirty && <Alert severity='info'>저장되지 않은 변경사항이 있습니다.</Alert>}
        <Button
          type='submit'
          variant='outlined'
          fullWidth
          sx={{ mt: 1, mr: 1 }}
          disabled={saved}>
          저장
        </Button>
      </Box>
    </form>
  );
};

export default SubTravelogue;

const Editor = styled('textarea')(({ theme }) => ({
  height: '20rem',
  width: '100%',
  resize: 'none',
  overflowY: 'auto',
  outlineColor: theme.palette.blue050.main,
}));
