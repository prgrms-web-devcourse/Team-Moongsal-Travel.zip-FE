import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { PushPin as PushPinIcon } from '@mui/icons-material';
import { Button, ListItem, ListItemText, Menu, MenuItem, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ScrapList } from '@/components/scrap';
import useScrapDetailData from '@/hooks/scrap/useScrapDetailData';
import { scrapListTextStyle, scrapPaperStyle } from '@/styles/commonStyle';

const ScrapDetailPage = () => {
  const router = useRouter();
  const {
    anchorEl,
    scrapTitle,
    scrapContents,
    postId,
    open,
    fetchScrap,
    handleClick,
    handleClose,
    deleteScrapItem,
  } = useScrapDetailData();

  useEffect(() => {
    fetchScrap();
  }, [fetchScrap]);

  const handleRouter = () => {
    router.push({
      pathname: '/detail',
      query: { travelogueId: postId },
    });
  };

  return (
    <>
      <ScrapList scrapTitle={scrapTitle}>
        {scrapContents &&
          scrapContents.map(({ scrapObjectId, placeName, postId }) => (
            <Paper key={scrapObjectId} sx={{ ...scrapPaperStyle, mb: 1 }}>
              <ListItem>
                <PushPinIcon sx={{ color: 'blue050.main', mr: 1 }} />
                <ListItemText primary={placeName} sx={scrapListTextStyle} />
                <Button
                  onClick={(e) => handleClick(e, scrapObjectId, postId)}
                  sx={{ minWidth: 0 }}>
                  <MoreVertIcon />
                </Button>
              </ListItem>
            </Paper>
          ))}
      </ScrapList>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleRouter}>게시글 이동</MenuItem>
        <MenuItem onClick={deleteScrapItem} sx={{ color: 'red.main' }}>
          삭제
        </MenuItem>
      </Menu>
    </>
  );
};

export default ScrapDetailPage;
