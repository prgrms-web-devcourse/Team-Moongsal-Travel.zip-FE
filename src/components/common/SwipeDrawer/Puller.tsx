import { Box } from '@mui/material';

import { theme } from '@/styles/MuiTheme';

const Puller = () => {
  return (
    <Box
      sx={{
        width: 30,
        height: 6,
        backgroundColor: theme.palette.gray030.main,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
      }}
    />
  );
};

export default Puller;
