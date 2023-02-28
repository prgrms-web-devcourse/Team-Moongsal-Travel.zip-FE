// import { useRouter } from 'next/router';

import { Box } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PostBasic, PostDetail, StepperButton } from '@/components/CreatePost';
import { CreatePost } from '@/types/CreatePost';

const Post = () => {
  const [steps, setSteps] = useState(0);
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

  return (
    <Box sx={layout}>
      {!steps ? (
        <>
          <form>
            <PostBasic control={control} />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <StepperButton
                format='forward'
                steps={steps}
                setSteps={setSteps}
                onClick={handleSubmit}
              />
            </Box>
          </form>
        </>
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
