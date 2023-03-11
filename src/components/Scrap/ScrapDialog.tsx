import { Add as AddIcon, Person as PersonIcon } from '@mui/icons-material';
import {
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { createScrap } from '@/api/scrap';
import useScrapDocsData from '@/hooks/useScrapDocsData';

export interface ScrapDialogProps {
  open: boolean;
  onClose: () => void;
  content: string;
}

const ScrapDialog = ({ open, onClose, content }: ScrapDialogProps) => {
  const { fetchScrapDoc, scrapDocs } = useScrapDocsData();
  const router = useRouter();
  useEffect(() => {
    fetchScrapDoc();
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (storageObjectId: string, content: string) => {
    const postId = router.query.travelogueId;
    if (postId && typeof postId === 'string')
      createScrap({ storageObjectId, content, postId });
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>스크랩할 폴더를 선택하세요</DialogTitle>
      <List sx={{ pt: 0 }}>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <ListItem disableGutters key={storageObjectId}>
              <ListItemButton
                onClick={() => handleListItemClick(storageObjectId, content)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'blue070.main', color: 'blue010.main' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='폴더 추가' />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
};

export default ScrapDialog;

{
  /* onClick={() => handleListItemClick()} */
}
