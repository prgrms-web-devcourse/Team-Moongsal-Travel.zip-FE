import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { createPost } from '@/api/post';
import { AlertMessage } from '@/components/common';
import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueFormType, TravelogueResponseType } from '@/types/post';

const First = () => {
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlFromS3(data.thumbnail as File);
    const response = await createPost({ ...data, thumbnail: url });
    if (response.status !== 200) {
      deleteFile(key);
      return;
    }
    goToSubTravelogue(response.data);
  };

  const goToSubTravelogue = (data: TravelogueResponseType) => {
    const { id: travelogueId, days } = data;
    router.push(
      { pathname: '/post/[id]', query: { travelogueId, days } },
      '/post/detail',
    );
  };

  return (
    <form onSubmit={handleSubmit(handleComplete)}>
      <PostBasic control={control} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {Object.keys(errors).length > 0 && <AlertMessage />}
        <Button type='submit'>다음</Button>
      </Box>
    </form>
  );
};

export default First;
