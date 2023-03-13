import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { PushPin as PushPinIcon } from '@mui/icons-material';
import {
  Button,
  Grid,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { scrapBg } from 'public/images';
import { useEffect, useState } from 'react';

import { deleteScrap, getScrapDetail } from '@/api/scrap';
import { ScrapDetailType } from '@/types/scrap';

const ScrapDetail = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrapId, setScrapId] = useState<string>('');
  const [scrapTitle, setScrapTitle] = useState();
  const [scrapContents, setScrapContents] = useState<ScrapDetailType[]>();
  const [postId, setPostId] = useState<string>('');
  const router = useRouter();
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchScrapDoc = async () => {
      if (router.isReady && typeof router.query.docId === 'string') {
        const { data } = await getScrapDetail(router.query.docId);
        setScrapTitle(data.title);
        setScrapContents(data.contents);
      }
    };
    fetchScrapDoc();
  }, [router]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    scrapId: string,
    postId: string,
  ) => {
    setScrapId(scrapId);
    setPostId(postId);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteScrapItem = async () => {
    handleClose();
    if (router.isReady && typeof router.query.docId === 'string') {
      deleteScrap(router.query.docId, scrapId);
      setScrapContents(
        (prevContents) =>
          prevContents &&
          prevContents.filter((content) => content.scrapObjectId !== scrapId),
      );
    }
  };

  const handleRouter = () => {
    router.push({
      pathname: '/detail',
      query: { travelogueId: postId },
    });
  };

  return (
    <>
      <Stack
        sx={{
          minHeight: 'calc(100vh - 18rem - 65px)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: '2rem',
          borderTopRightRadius: '2rem',
          mt: '18rem',
          p: 3,
          backgroundColor: 'blue010.main',
          boxSizing: 'border-box',
        }}>
        <Image
          src={scrapBg}
          alt={scrapBg}
          width={414}
          height={355}
          style={{
            position: 'absolute',
            top: '-295px',
            left: 0,
            paddingBottom: '3.5rem',
            boxSizing: 'border-box',
            backgroundColor: '#c4e2f5',
            zIndex: -1,
          }}
        />
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
          {scrapTitle}
        </Typography>
        <Grid container spacing={2}>
          {scrapContents &&
            scrapContents.map(({ scrapObjectId, placeName, postId }) => (
              <Grid item key={scrapObjectId} xs={6}>
                <Paper
                  elevation={1}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    padding: '0.5rem 0',
                    boxSizing: 'border-box',
                    borderRadius: '0.5rem',
                  }}>
                  <ListItem>
                    <PushPinIcon sx={{ color: 'blue050.main', mr: 1 }} />
                    <ListItemText
                      primary={placeName}
                      sx={{
                        width: '100%',
                        '.MuiTypography-root': {
                          fontWeight: 700,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        },
                      }}
                    />
                    <Button
                      onClick={(e) => handleClick(e, scrapObjectId, postId)}
                      sx={{ minWidth: 0 }}>
                      <MoreVertIcon />
                    </Button>
                  </ListItem>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Stack>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleRouter}>게시글 이동</MenuItem>
        <MenuItem onClick={deleteScrapItem} sx={{ color: 'red.main' }}>
          삭제
        </MenuItem>
      </Menu>
    </>
  );
};

export default ScrapDetail;
