import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { postTravelogue } from '@/api/post';
import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueFormType, TravelogueResponseType } from '@/types/post';
import { createPeriodArray } from '@/utils/helper';
import { setItem } from '@/utils/storage';

const First = () => {
  const router = useRouter();
  const { handleSubmit, control } = useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlFromS3(data.thumbnail as File);
    const response = await postTravelogue({ ...data, thumbnail: url });
    if (response.status !== 200) {
      deleteFile(key);
      return;
    }
    goToSubTravelogue(response.data);
  };

  const goToSubTravelogue = (data: TravelogueResponseType) => {
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
      <PostBasic control={control} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type='submit'>다음</Button>
      </Box>
    </form>
  );
};

export default First;
