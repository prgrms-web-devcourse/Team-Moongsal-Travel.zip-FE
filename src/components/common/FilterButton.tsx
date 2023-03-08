import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, Dialog, Popover } from '@mui/material';
import { useState } from 'react';

import { SubTitle, Title } from '@/components/common';

const FilterButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mt: '2rem',
        maxWidth: '90%',
        margin: '2rem auto',
      }}>
      <Button variant='outlined' startIcon={<TuneIcon />} onClick={onClick}>
        필터
      </Button>
      <Dialog open={open}>
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={onClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}>
          <Box width={250} height={300}>
            <Title>정렬</Title>
            <SubTitle>여행 경비</SubTitle>
            <SubTitle>여행 기간</SubTitle>
          </Box>
        </Popover>
      </Dialog>
    </Box>
  );
};

export default FilterButton;
