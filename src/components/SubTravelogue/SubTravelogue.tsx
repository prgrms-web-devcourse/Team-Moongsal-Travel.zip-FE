import { Alert, Box, Button, OutlinedInput, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { useGetSubTravelogueForEdit, useSaveSubTravelogue } from '@/api/hooks/post';
import { SubTitle } from '@/components/common';
import { Transportation, VisitedRegion } from '@/components/SubTravelogue';
import { subTravelogueFormDefault } from '@/constants/defaultFormValue';
import useHandleTraveloguePublish from '@/hooks/useHandleTraveloguePublish';
import useSubTravelogueForm from '@/hooks/useSubTravelogueForm';
import { inputStyle } from '@/styles/commonStyle';
import { SubTravelogueType } from '@/types/post';
import { getItem, setItem } from '@/utils/storage';

const RichEditor = dynamic(() => import('@/components/Editor/RichEditor'), {
  ssr: false,
});

type SavedInfo = {
  data: SubTravelogueType;
  id: string;
};

interface SubTravelogueProps {
  travelogueId: string;
  index: number;
  isEditPage: boolean;
  handleComplete?: () => void;
}

const SubTravelogue = ({
  travelogueId,
  index,
  isEditPage,
  handleComplete,
}: SubTravelogueProps) => {
  const router = useRouter();
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
  const { mutate } = useSaveSubTravelogue(savedInfo !== null || isEditPage);
  const { handleTraveloguePublish } = useHandleTraveloguePublish(travelogueId);
  const subId = router.query.id as string;
  const { data: subTravelogue } = useGetSubTravelogueForEdit(travelogueId, subId);
  const hasErrors = Object.keys(errors).length > 0;
  const unsaved = savedInfo !== null;

  useEffect(() => {
    if (isEditPage && subTravelogue) {
      const { title, content, addresses, transportationSet } = subTravelogue.data;
      setValue('title', title);
      setValue('content', content);
      setValue('addresses', addresses);
      setValue('transportationSet', transportationSet);
    }
  }, [isEditPage, subTravelogue, setValue]);

  const handleSaveSubTravelogue = (data: SubTravelogueType, isPatch: boolean) => {
    const subTravelogueData = { ...data, day: index + 1 };
    const subTravelogueId = isEditPage ? subId : savedInfo?.id ?? '';
    mutate(
      { data: subTravelogueData, travelogueId, subTravelogueId },
      {
        onSuccess: ({ data }) => {
          reset(subTravelogueData);
          setItem(`save-${travelogueId}-${index}`, {
            data: subTravelogueData,
            id: data[isPatch ? 'subTravelogueId' : 'id'],
          });
          handleComplete && handleComplete();
          isEditPage && handleTraveloguePublish();
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
        handleSaveSubTravelogue(data, unsaved || isEditPage),
      )}>
      <Stack sx={{ mb: '1rem' }}>
        <SubTitle>소제목</SubTitle>
        <OutlinedInput
          {...title}
          fullWidth
          placeholder='소제목을 입력하세요'
          type='text'
          sx={inputStyle}
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
          {!isEditPage && (
            <Button
              type='submit'
              variant='outlined'
              sx={{ mt: 1, mr: 1 }}
              fullWidth
              disabled={unsaved}>
              저장
            </Button>
          )}
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 1, mr: 1, backgroundColor: 'blue070.main' }}
            fullWidth
            disabled={isEditPage ? false : !unsaved}>
            수정
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default SubTravelogue;
