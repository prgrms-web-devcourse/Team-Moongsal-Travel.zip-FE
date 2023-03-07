import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { postTravelogue } from '@/api/post';
import { PostBasic } from '@/components/CreatePost';
import { travelogueFormProps } from '@/constants/defaultFormValue';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueFormType } from '@/types/post';

const First = () => {
  const { handleSubmit, control } = useForm<TravelogueFormType>(travelogueFormProps);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();

  const handleComplete = async (data: TravelogueFormType) => {
    const { key, url } = await getImageUrlFromS3(data.thumbnail as File);
    const response = await postTravelogue({ ...data, thumbnail: url });
    if (response.status !== 200) {
      deleteFile(key);
      return;
    }
    // Todo: 트래블로그 작성 성공시 서브 트래블로그로 아이디와 일수 넘기기
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
