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
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getScrapDocument } from '@/api/scrap';
import { SubTitle } from '@/components/common';
import useScrapData from '@/hooks/useScrapData';

const Scrap = () => {
  const router = useRouter();
  const {
    scrapDocs,
    setScrapDocs,
    open,
    setOpen,
    title,
    titleState,
    createScrapDoc,
    deleteScrapDoc,
    handleSubmit,
  } = useScrapData();

  useEffect(() => {
    const fetchScrapDoc = async () => {
      const response = await getScrapDocument();
      setScrapDocs(response.data.list);
    };
    fetchScrapDoc();
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClick = (docId: string) => {
    router.push({
      pathname: `/scrap/${docId}`,
    });
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
            <Box component='form' onSubmit={handleSubmit(createScrapDoc)}>
              <SubTitle>나만의 장소 추가</SubTitle>
              <TextField
                {...title}
                fullWidth
                placeholder='폴더 이름을 입력해주세요'
                sx={{ mt: 2 }}
                error={titleState.error && true}
                helperText={titleState.error && titleState.error.message}
              />
              <Stack flexDirection='row' justifyContent='flex-end' mt={2}>
                <Button onClick={toggleDrawer(false)}>취소</Button>
                <Button type='submit'>생성</Button>
              </Stack>
            </Box>
          </Box>
        </SwipeableDrawer>
      </Stack>
      <List sx={{ display: 'flex', flexDirection: 'column' }}>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <Stack key={storageObjectId} flexDirection='row' p={2}>
              <ListItem
                onClick={() => handleClick(storageObjectId)}
                sx={{
                  cursor: 'pointer',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItem>
              <IconButton onClick={() => deleteScrapDoc(storageObjectId)}>
                <DeleteIcon />
              </IconButton>
            </Stack>
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
