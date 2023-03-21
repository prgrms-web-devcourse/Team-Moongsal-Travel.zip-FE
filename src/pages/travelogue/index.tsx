import { Box, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/common/useImageUpload';
import {
  useGetTravelogueForEdit,
  usePatchTraveloguePublish,
  useSaveTravelogue,
} from '@/hooks/query/travelogue';
import { TravelogueFormType, TravelogueSaveResponseType } from '@/types/post';
import { createPeriodArray } from '@/utils/helper';
import { getItem, setItem } from '@/utils/storage';

const TraveloguePage = () => {
  const router = useRouter();
  const { handleSubmit, control, setValue } =
    useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();
  const [travelogueId, setTravelogueId] = useState('');
  const [isEditPage, setIsEditPage] = useState(false);
  const [isTempPage, setIsTempPage] = useState(false);
  const { data: travelogue, refetch } = useGetTravelogueForEdit(travelogueId);
  const { mutate: saveMutate } = useSaveTravelogue(isEditPage);
  const { mutate: publishMutate } = usePatchTraveloguePublish();

  useEffect(() => {
    const { travelogueId, edit, temp } = router.query;
    edit && setIsEditPage(true);
    travelogueId && setTravelogueId(travelogueId as string);
    if (temp) {
      setIsTempPage(true);
      setIsEditPage(true);
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (travelogueId) {
      refetch();
    }
  }, [travelogueId, refetch]);

  useEffect(() => {
    if (isEditPage && travelogue) {
      const { cost, title, period, country } = travelogue.data;
      setValue('country.name', country.name);
      setValue('period.startDate', period.startDate);
      setValue('period.endDate', period.endDate);
      setValue('cost.total', String(cost.total));
      setValue('title', title);
    }
  }, [isEditPage, travelogue, setValue]);

  const getImageUrlAndKey = async (thumbnail: File | null) => {
    if (isEditPage && thumbnail === null) {
      const url = travelogue?.data.thumbnail as string;
      return { url, key: '' };
    }
    const { key, url } = await getImageUrlFromS3(thumbnail as File);
    return { key, url };
  };

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlAndKey(data.thumbnail);
    saveMutate(
      { data: { ...data, thumbnail: url }, travelogueId },
      {
        onSuccess: ({ data }) => {
          isTempPage
            ? goToTempSubTravelogue(data.travelogueId)
            : isEditPage
            ? publishTravelogue(data.travelogueId)
            : goToSubTravelogue(data);
        },
        onError: () => {
          key && deleteFile(key);
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

  const goToTempSubTravelogue = (travelogueId: string) => {
    if (isTempPage) {
      const tempData = getItem<{ days: string; subsId: string[] }>(
        `temp-data-${travelogueId}`,
      );
      if (tempData) {
        const { days } = tempData;
        setItem(`travelogueInfo`, {
          id: travelogueId,
          step: createPeriodArray(parseInt(days)),
        });
        router.push(
          { pathname: '/travelogue/[id]', query: { travelogueId, days } },
          '/travelogue/detail',
        );
      }
    }
  };

  const goToSubTravelogue = (data: TravelogueSaveResponseType) => {
    const { id: travelogueId, days } = data;
    setItem(`travelogueInfo`, {
      id: travelogueId,
      step: createPeriodArray(days),
    });
    router.push(
      { pathname: '/travelogue/[id]', query: { travelogueId, days } },
      '/travelogue/detail',
    );
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(handleComplete)}
      sx={{ px: '15px', mt: '1rem' }}>
      <PostBasic control={control} isEditPage={isEditPage} data={travelogue?.data} />
      <Stack direction='row' justifyContent='flex-end' sx={{ mt: 3, mb: 6 }}>
        {isEditPage ? (
          isTempPage ? (
            <Button type='submit' sx={{ color: 'blue050.main' }}>
              다음
            </Button>
          ) : (
            <Button type='submit' fullWidth variant='contained'>
              완료
            </Button>
          )
        ) : (
          <Button type='submit' sx={{ color: 'blue050.main' }}>
            다음
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default TraveloguePage;
