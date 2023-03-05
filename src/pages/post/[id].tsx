import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { StepperButton, SubTravelogue } from '@/components/CreatePost';

const SubTraveloguePage = () => {
  const [steps, setSteps] = useState(0);
  const query = useRouter().query;

  return (
    <Box sx={layout}>
      <SubTravelogue query={query} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <StepperButton format='backward' steps={steps} setSteps={setSteps} />
        <StepperButton format='complete' steps={steps} setSteps={setSteps} />
      </Box>
    </Box>
  );
};

export default SubTraveloguePage;

const layout = { padding: '0 24px' };
