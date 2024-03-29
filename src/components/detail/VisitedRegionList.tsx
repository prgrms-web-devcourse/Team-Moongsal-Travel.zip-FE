import {
  CreateNewFolder as CreateNewFolderIcon,
  LocationOn as LocationOnIcon,
  PushPin as PushPinIcon,
} from '@mui/icons-material';
import { Chip, Divider, Stack, Typography } from '@mui/material';
import { Fragment, useState } from 'react';

import { ScrapDialog } from '@/components/scrap';

interface VisitedRegionProps {
  addresses: { region: string }[];
}

const VisitedRegionList = ({ addresses }: VisitedRegionProps) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>('');

  const handleClickOpen = (value: string) => {
    setOpen(true);
    setContent(value);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Divider sx={{ my: 2 }} />
      <Stack direction='row' spacing={0.5} alignItems={'center'} sx={{ mb: 1.5 }}>
        <PushPinIcon color={'blue050'} sx={{ width: '16px' }} />
        <Typography variant='subtitle1' color='dark.main'>
          방문한 장소
        </Typography>
      </Stack>
      <Stack spacing={2}>
        {addresses.map(({ region }, i) => (
          <Fragment key={i}>
            <Chip
              variant='filled'
              icon={
                <LocationOnIcon
                  sx={{ width: '17px', color: 'blue050.main' }}
                  color='white'
                />
              }
              label={region}
              sx={{
                backgroundColor: 'blue040.main',
                '.MuiChip-deleteIcon': {
                  color: 'white.main',
                },
                color: 'white.main',
              }}
              onDelete={() => handleClickOpen(region)}
              deleteIcon={
                <CreateNewFolderIcon
                  sx={{
                    width: '16px',
                    position: 'absolute',
                    right: '10px',
                    '&.MuiSvgIcon-root:hover': {
                      color: 'blue050.main',
                    },
                  }}
                />
              }
            />
            <ScrapDialog open={open} onClose={onClose} content={content} />
          </Fragment>
        ))}
      </Stack>
    </>
  );
};

export default VisitedRegionList;
