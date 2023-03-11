import { Delete as DeleteIcon, Folder as FolderIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  styled,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { getScrapDocument } from '@/api/scrap';
import { SubTitle } from '@/components/common';

const DUMMY_DATA = {
  list: [
    { storageObjectId: '640abc577baac103361ac6e1', title: '일본 여행' },
    { storageObjectId: '640abc577baac103361ac6e', title: '제주도 여행' },
    { storageObjectId: '640abc577baac103361ac1', title: '유럽 여행' },
  ],
};

const Scrap = () => {
  // const [scrapDocs, setScrapDocs] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchScrapDoc = async () => {
      const response = await getScrapDocument();
      console.log(response);
    };
    fetchScrapDoc();
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Stack>
        <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
          나만의 장소
        </Typography>
        <Button onClick={toggleDrawer(true)}>폴더 추가</Button>
        <SwipeableDrawer
          container={() => document.body}
          anchor='bottom'
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableScrollLock
          sx={swipeStyle}
          ModalProps={{
            keepMounted: false,
          }}>
          <Puller />
          <Box sx={{ pb: 2 }} />
          <Box>
            <Box component='form'>
              <SubTitle>나만의 장소 추가</SubTitle>
              <TextField fullWidth placeholder='폴더 이름을 적어주세요' sx={{ mt: 2 }} />
              <Stack flexDirection='row' justifyContent='flex-end' mt={2}>
                <Button>취소</Button>
                <Button>생성</Button>
              </Stack>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Stack>
      <List dense={false}>
        {DUMMY_DATA.list.map(({ title, storageObjectId }) => (
          <ListItem
            key={storageObjectId}
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Scrap;

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.gray030.main,
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const swipeStyle = {
  '&.MuiDrawer-root > .MuiPaper-root': {
    boxSizing: 'border-box',
    minWidth: '390px',
    maxWidth: '414px',
    margin: 'auto',
    padding: '1rem 2rem',
    overflow: 'visible',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
} as const;
