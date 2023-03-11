import { MoreVert as MoreVertIcon } from '@mui/icons-material';
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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { deleteScrap, getScrapDetail } from '@/api/scrap';
import { ScrapDetailType } from '@/types/scrap';

const ScrapDetail = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrapId, setScrapId] = useState<string>('');
  const [scrapTitle, setScrapTitle] = useState();
  const [scrapContents, setScrapContents] = useState<ScrapDetailType[]>();
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, scrapId: string) => {
    setScrapId(scrapId);
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

  return (
    <>
      <Stack>
        <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
          {scrapTitle}
        </Typography>
        <Grid container spacing={2}>
          {scrapContents &&
            scrapContents.map(({ scrapObjectId, placeName }) => (
              <Grid item key={scrapObjectId} xs={6}>
                <Paper elevation={3}>
                  <ListItem
                    sx={{
                      display: 'flex',
                      px: 1,
                    }}>
                    <ListItemText
                      primary={placeName}
                      sx={{
                        width: '80%',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    />
                    <Button
                      onClick={(e) => handleClick(e, scrapObjectId)}
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
        <MenuItem>게시글 이동</MenuItem>
        <MenuItem onClick={deleteScrapItem}>삭제</MenuItem>
      </Menu>
    </>
  );
};

export default ScrapDetail;
