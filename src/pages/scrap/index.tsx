import { Delete as DeleteIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  IconButton,
  ListItem,
  ListItemText,
  Stack,
  styled,
  SwipeableDrawer,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { SubTitle } from '@/components/common';
import { SCRAP_DOCS_IMAGE } from '@/constants';
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
          sx={{ fontSize: '1rem', color: 'blue070.main' }}>
          모음집 추가
        </Button>
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
      <Grid container>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <Grid item xs={6} key={storageObjectId} flexDirection='row' p={2}>
              <Box sx={BookImage}>
                <ListItem
                  onClick={() => handleClick(storageObjectId)}
                  sx={{
                    cursor: 'pointer',
                    pt: '2rem',
                    pl: '2rem',
                    width: '9rem',
                  }}>
                  <ListItemText primary={title} sx={TextStyle} />
                </ListItem>
                <IconButton
                  onClick={() => deleteScrapDoc(storageObjectId)}
                  sx={{ color: 'red.main', p: 0, pl: 2 }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Grid>
          ))}
      </Grid>
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

const BookImage = {
  width: '10rem',
  height: '10rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundImage: `url(${SCRAP_DOCS_IMAGE.url})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
} as const;

const TextStyle = {
  '.MuiTypography-root': {
    fontWeight: 700,
    color: 'gray030.main',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};
