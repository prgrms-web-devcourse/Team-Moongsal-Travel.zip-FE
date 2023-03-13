import { Delete as DeleteIcon } from '@mui/icons-material';
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
import Image from 'next/image';
import { useRouter } from 'next/router';
import { folder, scrapBg } from 'public/images';
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
      <Image
        src={scrapBg}
        alt={scrapBg}
        width={414}
        height={350}
        style={{
          position: 'absolute',
          top: '60px',
          paddingBottom: '3.5rem',
          boxSizing: 'border-box',
          backgroundColor: '#c4e2f5',
        }}
      />
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
          mt: '18rem',
          '&.MuiList-root': {
            backgroundColor: 'blue010.main',
          },
        }}>
        <Typography
          sx={{
            mt: 4,
            mb: 2,
            fontWeight: 900,
            fontSize: '1.5rem',
            color: 'blue040.main',
          }}
          variant='h6'
          component='div'>
          나만의 장소 모음집
        </Typography>
        <Button
          onClick={toggleDrawer(true)}
          sx={{ fontSize: '1rem', color: 'blue040.main' }}>
          모음집 추가
        </Button>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <Stack key={storageObjectId} flexDirection='row' px={2} pb={1.5}>
              <Paper
                key={storageObjectId}
                sx={{
                  display: 'flex',
                  width: '100%',
                  padding: '0.5rem',
                  boxSizing: 'border-box',
                  borderRadius: '0.5rem',
                }}>
                <ListItem
                  onClick={() => handleClick(storageObjectId)}
                  sx={{
                    cursor: 'pointer',
                    width: '90%',
                  }}>
                  <ListItemAvatar sx={{ mr: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'transparent',
                        borderRadius: 0,
                        width: '3rem',
                        height: '3rem',
                      }}>
                      <Image src={folder} alt='document' fill />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={title}
                    sx={{
                      '.MuiTypography-root': {
                        fontWeight: 700,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
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
