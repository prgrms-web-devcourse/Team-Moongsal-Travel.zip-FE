import { Box, Button } from '@mui/material';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';

import { createPost } from '@/api/post';
import { AlertMessage } from '@/components/common';
import { PostBasic } from '@/components/CreatePost';
import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueForm } from '@/types/post';

const First = () => {
  // const router = useRouter();
  const methods = useForm<TravelogueForm>({
    mode: 'onChange',
    defaultValues: {
      country: {
        name: '',
      },
      period: { startDate: '', endDate: '' },
      cost: {
        transportation: '',
        lodge: '',
        etc: '',
        total: '',
      },
      title: '',
      thumbnail: undefined,
    },
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;
  const { location, uploadFile, deleteFile } = useImageUpload();

  const handleComplete = async (data: TravelogueForm) => {
    const file = data.thumbnail;
    const key = 'upload/' + v4() + file.name;
    await uploadFile(file, key);
    if (location) {
      const { status } = await createPost({
        ...data,
        thumbnail: location,
      });
      status !== 200 && deleteFile(key);
    }
    // 성공시 subtravelogues로 넘김
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
