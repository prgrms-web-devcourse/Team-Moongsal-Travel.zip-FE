import { Box, Button } from '@mui/material';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

// import { createPost } from '@/api/post';
import { PostBasic } from '@/components/CreatePost';
import { CreatePost } from '@/types/post';

const First = () => {
  // const router = useRouter();
  const methods = useForm<CreatePost>({
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
      thumbnail: '',
    },
  });
  const { handleSubmit, control } = methods;

  const handleComplete = (data: CreatePost) => {
    console.log(data);
    // createPost(data);
    // 성공시 subtravelogues로 넘김
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
