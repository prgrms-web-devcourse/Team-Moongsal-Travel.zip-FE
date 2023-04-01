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
  TextField,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { folder, scrapBg } from 'public/images';
import { useEffect } from 'react';

import { SwipeableDrawer } from '@/components/common/SwipeDrawer';
import { SubTitle, Title } from '@/components/common/Title';
import useScrapDocsData from '@/hooks/scrap/useScrapDocsData';
import { scrapImageStyle, scrapListStyle, scrapPaperStyle } from '@/styles/commonStyle';

const ScrapPage = () => {
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
      <SwipeableDrawer open={open} toggleDrawer={toggleDrawer}>
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
      </SwipeableDrawer>
      <List sx={scrapListStyle}>
        <Image src={scrapBg} alt={scrapBg} style={scrapImageStyle} />
        <Title fontSize='1.5rem' bold='900' color='blue040.main' sx={{ mb: 2 }}>
          나만의 장소 모음집
        </Title>
        <Button
          onClick={toggleDrawer(true)}
          sx={{ fontSize: '1rem', fontWeight: 700, color: 'blue040.main' }}>
          모음집 추가
        </Button>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <Stack key={storageObjectId} flexDirection='row' pb={1.5}>
              <Paper key={storageObjectId} sx={scrapPaperStyle}>
                <ListItem
                  onClick={() => handleClick(storageObjectId)}
                  sx={{
                    cursor: 'pointer',
                    width: '85%',
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

export default ScrapPage;
