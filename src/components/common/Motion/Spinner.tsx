import { Box, CircularProgress, Fade } from '@mui/material';

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner = ({ isLoading }: SpinnerProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Fade in={isLoading}>
        <Box sx={{ bgcolor: 'white.main' }}>
          <CircularProgress color='primary' size={25} />
        </Box>
      </Fade>
    </Box>
  );
};

export default Spinner;
