// import { useRouter } from 'next/router';

import { Box } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { CreatePostForm } from '@/api/createPost/type';
import { PostBasic, PostDetail, StepperButton } from '@/components/CreatePost';

const Post = () => {
  const [steps, setSteps] = useState(0);
  const methods = useForm<CreatePostForm>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      startDate: '',
      endDate: '',
      transportation: '',
      lodge: '',
      etc: '',
      total: '',
      title: '',
      thumbnail: '',
    },
  });
  const { handleSubmit, control } = methods;

  const onSubmit = (data: any) => console.log(data);

  return (
    <Box sx={layout}>
      {!steps ? (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <PostBasic control={control} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <StepperButton format='forward' steps={steps} setSteps={setSteps} />
          </Box>
        </form>
      ) : (
        <>
          <PostDetail />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <StepperButton format='backward' steps={steps} setSteps={setSteps} />
            <StepperButton format='complete' steps={steps} setSteps={setSteps} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Post;

const layout = { padding: '0 24px' };
