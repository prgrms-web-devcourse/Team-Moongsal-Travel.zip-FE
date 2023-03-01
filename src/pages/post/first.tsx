import { Box, Button } from '@mui/material';
// import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { AlertMessage } from '@/components/common';
import { PostBasic } from '@/components/CreatePost';
import { CreatePost } from '@/types/CreatePost';

// const dummy_data = '123';

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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const handleComplete = (data: CreatePost) => {
    // api 호출후 subtravelogues로 이동시키기
    console.log(data);
  };

  const handleError = () => {
    // return ;;
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleComplete, handleError)}>
        <PostBasic control={control} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {Object.keys(errors).length > 0 && <AlertMessage />}
          <Button type='submit'>다음</Button>
        </Box>
      </form>
    </>
  );
};

export default First;
