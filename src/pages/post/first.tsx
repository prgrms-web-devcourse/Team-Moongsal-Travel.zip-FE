import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  useGetTravelogueForEdit,
  usePatchTraveloguePublish,
  useSaveTravelogue,
} from '@/api/hooks/post';
import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueFormType, TravelogueSaveResponseType } from '@/types/post';
import { createPeriodArray } from '@/utils/helper';
import { setItem } from '@/utils/storage';

const First = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();
  const [travelogueId, setTravelogueId] = useState('');
  const [isEditPage, setIsEditPage] = useState(false);
  const { data: travelogue, refetch } = useGetTravelogueForEdit(travelogueId);
  const { mutate: saveMutate } = useSaveTravelogue(isEditPage);
  const { mutate: publishMutate } = usePatchTraveloguePublish();

  useEffect(() => {
    const { travelogueId, edit } = router.query;
    if (travelogueId && edit) {
      setIsEditPage(true);
      setTravelogueId(travelogueId as string);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (travelogueId) {
      refetch();
    }
  }, [travelogueId]);

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlFromS3(data.thumbnail as File);
    saveMutate(
      { data: { ...data, thumbnail: url }, travelogueId },
      {
        onSuccess: ({ data }) => {
          isEditPage ? publishTravelogue(data.travelogueId) : goToSubTravelogue(data);
        },
        onError: () => {
          deleteFile(key);
        },
      },
    );
  };

  const publishTravelogue = (travelogueId: string) => {
    publishMutate(
      { travelogueId },
      {
        onSuccess: ({ data }) => {
          router.push({
            pathname: '/detail',
            query: { travelogueId: data.travelogueId },
          });
        },
      },
    );
  };

  const goToSubTravelogue = (data: TravelogueSaveResponseType) => {
    const { id: travelogueId, days } = data;
    setItem(`travelogueInfo`, {
      id: travelogueId,
      step: createPeriodArray(days),
    });
    router.push(
      { pathname: '/post/[id]', query: { travelogueId, days } },
      '/post/detail',
    );
  };

  return (
    <form onSubmit={handleSubmit(handleComplete)}>
      <PostBasic control={control} isEditPage={isEditPage} data={travelogue?.data} />
      <Stack direction='row' justifyContent='flex-end' sx={{ mt: 3, mb: 6 }}>
        {isEditPage ? (
          <Button type='submit' fullWidth variant='contained'>
            완료
          </Button>
        ) : (
          <Button type='submit'>다음</Button>
        )}
      </Stack>
    </form>
  );
};

export default First;
