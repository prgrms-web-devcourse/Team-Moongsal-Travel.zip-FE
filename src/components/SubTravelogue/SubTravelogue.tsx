import { Alert, Box, Button, OutlinedInput, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { useSaveSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { RichEditor } from '@/components/Editor';
import { Transportation, VisitedRegion } from '@/components/SubTravelogue';
import { subTravelogueFormDefault } from '@/constants/defaultFormValue';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { SubTravelogueType } from '@/types/post';
import { getItem, setItem } from '@/utils/storage';

type SavedInfo = {
  data: SubTravelogueType;
  id: string;
};
interface SubTravelogueProps {
  travelogueId: string;
  index: number;
  handleComplete: () => void;
}

const SubTravelogue = ({ travelogueId, index, handleComplete }: SubTravelogueProps) => {
  const savedInfo = getItem<SavedInfo>(`save-${travelogueId}-${index}`);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isDirty, errors },
  } = useForm<SubTravelogueType>({
    defaultValues: savedInfo?.data ?? subTravelogueFormDefault,
  });
  const { title, content, transportationSet } = useSubTravelogueForm(control);
  useFormPersist(`temp-${travelogueId}-${index}`, { watch, setValue });
  const { mutate } = useSaveSubTravelogue(savedInfo !== null);
  const hasErrors = Object.keys(errors).length > 0;

  const handleSaveSubTravelogue = (data: SubTravelogueType, isPatch: boolean) => {
    const subTravelogueData = { ...data, day: index + 1 };
    mutate(
      { data: subTravelogueData, travelogueId, subTravelogueId: savedInfo?.id ?? '' },
      {
        onSuccess: ({ data }) => {
          reset(subTravelogueData);
          handleComplete();
          setItem(`save-${travelogueId}-${index}`, {
            data: subTravelogueData,
            id: data[isPatch ? 'subTravelogueId' : 'id'],
          });
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
    <form
      onSubmit={handleSubmit((data) =>
        handleSaveSubTravelogue(data, savedInfo !== null),
      )}>
      <Stack sx={{ mb: '1rem' }}>
        <SubTitle>소제목</SubTitle>
        <OutlinedInput
          {...title}
          fullWidth
          placeholder='소제목을 입력하세요'
          type='text'
        />
      </Stack>
      <VisitedRegion control={control} />
      <Transportation
        value={transportationSet.value}
        onTransportSelect={handleTransportSelect}
      />
      <Stack sx={{ mb: '1rem' }}>
        <SubTitle>글을 자유롭게 작성해보세요</SubTitle>
        <RichEditor content={content} />
      </Stack>
      <Box sx={{ mb: 2 }}>
        {hasErrors && <Alert severity='error'>모든 정보를 입력해주세요.</Alert>}
        {isDirty && <Alert severity='info'>저장되지 않은 변경사항이 있습니다.</Alert>}
        <Stack direction='row'>
          <Button
            type='submit'
            variant='outlined'
            sx={{ mt: 1, mr: 1 }}
            fullWidth
            disabled={savedInfo !== null}>
            저장
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 1, mr: 1 }}
            fullWidth
            disabled={!(savedInfo !== null)}>
            수정
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default SubTravelogue;
