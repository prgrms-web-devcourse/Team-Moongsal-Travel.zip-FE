/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PostBasic } from '@/components/travelogue/Travelogue';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/common/useImageUpload';
import {
  useGetTravelogueForEdit,
  usePatchTraveloguePublish,
  useSaveTravelogue,
} from '@/hooks/query/travelogue';
import { TravelogueFormType } from '@/types/travelogue';
import { createPeriodArray } from '@/utils/helper';
import { getItem, setItem } from '@/utils/storage';

const TraveloguePage = () => {
  const router = useRouter();
  const { travelogueId, edit, temp } = router.query;
  const { control, handleSubmit, setValue, reset } =
    useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();
  const { data: travelogue, refetch } = useGetTravelogueForEdit(travelogueId as string);
  const { mutate: saveMutate } = useSaveTravelogue(Boolean(edit));
  const { mutate: publishMutate } = usePatchTraveloguePublish();
  const tempData = getItem<{ days: string }>(`temp-data-${travelogueId}`);

  useEffect(() => {
    if (edit || temp) refetch();
  }, [edit, temp, refetch]);

  useEffect(() => {
    if ((edit || temp) && travelogue) {
      const { thumbnail, subTravelogueIds, cost, ...rest } = travelogue.data;
      reset(rest);
      setValue('cost.total', String(cost.total));
    }
  }, [edit, temp, travelogue, reset, setValue]);

  const getImageUrlAndKey = async (thumbnail: File | null) => {
    if (edit && thumbnail === null) {
      const url = travelogue?.data.thumbnail as string;
      return { url, key: '' };
    }
    const { key, url } = await getImageUrlFromS3(thumbnail as File);
    return { key, url };
  };

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlAndKey(data.thumbnail);
    saveMutate(
      { data: { ...data, thumbnail: url }, travelogueId: String(travelogueId) },
      {
        onSuccess: ({ data }) => {
          const { id, travelogueId, days } = data;
          edit && !temp
            ? publishTravelogue(travelogueId)
            : goToSubTravelogue(id ?? travelogueId, days ?? tempData?.days);
        },
        onError: () => key && deleteFile(key),
      },
    );
  };

  const publishTravelogue = (travelogueId: string) => {
    publishMutate(
      { travelogueId },
      {
        onSuccess: ({ data: { travelogueId } }) => {
          router.push({ pathname: '/detail', query: { travelogueId } });
        },
      },
    );
  };

  const goToSubTravelogue = (id: number, days: number) => {
    setItem(`travelogueInfo`, { id, step: createPeriodArray(days) });
    router.push(
      { pathname: '/travelogue/[id]', query: { travelogueId: id, days } },
      '/travelogue/detail',
    );
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(handleComplete)}
      sx={{ px: '15px', mt: '1rem' }}>
      <PostBasic
        control={control}
        isEditPage={Boolean(edit || temp)}
        data={travelogue?.data}
      />
      <Stack direction='row' justifyContent='flex-end' sx={{ mt: 3, mb: 6 }}>
        <Button
          type='submit'
          fullWidth={Boolean(edit)}
          variant={edit ? 'contained' : 'text'}
          sx={{ color: edit ? 'white.main' : 'blue050.main' }}>
          {edit ? '완료' : '다음'}
        </Button>
      </Stack>
    </Box>
  );
};

export default TraveloguePage;
