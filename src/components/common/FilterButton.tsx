import { Tune as TuneIcon } from '@mui/icons-material';
import { Box, Button, Dialog, Popover } from '@mui/material';
import { useState } from 'react';

import { SubTitle } from '@/components/common';

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
            <Box>
              <SubTitle>정렬</SubTitle>
              <button>최신순</button>
              <button>인기순</button>
            </Box>
            <Box>
              <SubTitle>여행 경비</SubTitle>
              <input placeholder='최소금액' />
              <input placeholder='최대금액' />
            </Box>
            <Box>
              <SubTitle>여행 기간</SubTitle>
              <input placeholder='최소기간' />
              <input placeholder='최대기간' />
            </Box>
            <button>적용</button>
          </Box>
        </Popover>
      </Dialog>
    </Box>
  );
};

export default FilterButton;
