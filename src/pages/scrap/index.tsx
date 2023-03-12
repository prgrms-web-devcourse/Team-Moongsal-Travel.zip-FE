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
  Paper,
  Stack,
  styled,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { SubTitle } from '@/components/common';
import useScrapDocsData from '@/hooks/useScrapDocsData';

const Scrap = () => {
  const router = useRouter();
  const {
    scrapDocs,
    open,
    setOpen,
    title,
    titleState,
    fetchScrapDoc,
    createScrapDoc,
    deleteScrapDoc,
    handleSubmit,
  } = useScrapDocsData();

  useEffect(() => {
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
              <Paper
                key={storageObjectId}
                sx={{
                  display: 'flex',
                  width: '100%',
                  padding: '0.5rem',
                  boxSizing: 'border-box',
                }}>
                <ListItem
                  onClick={() => handleClick(storageObjectId)}
                  sx={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'blue040.main', color: 'blue010.main' }}>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={title}
                    sx={{
                      '.MuiTypography-root': {
                        fontWeight: 700,
                      },
                    }}
                  />
                </ListItem>
                <IconButton
                  onClick={() => deleteScrapDoc(storageObjectId)}
                  sx={{ color: 'red.main' }}>
                  <DeleteIcon />
                </IconButton>
              </Paper>
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
