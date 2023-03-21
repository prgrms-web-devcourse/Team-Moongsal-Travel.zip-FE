import { Add as AddIcon, Folder as FolderIcon } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { createScrap } from '@/api/scrap';
import { Transition } from '@/components/common/Motion';
import useScrapDocsData from '@/hooks/scrap/useScrapDocsData';

export interface ScrapDialogProps {
  open: boolean;
  onClose: () => void;
  content: string;
}

const ScrapDialog = ({ open, onClose, content }: ScrapDialogProps) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const { fetchScrapDoc, scrapDocs, handleSubmit, createScrapDoc, title, titleState } =
    useScrapDocsData();
  const router = useRouter();

  useEffect(() => {
    fetchScrapDoc();
  }, []);

  const handleClose = () => {
    onClose();
    fetchScrapDoc();
  };

  const handleDisplayForm = () => {
    setIsDisplay(!isDisplay);
  };

  const handleListItemClick = (storageObjectId: string, content: string) => {
    const postId = router.query.travelogueId;
    if (postId && typeof postId === 'string')
      createScrap({ storageObjectId, content, postId });
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} TransitionComponent={Transition}>
      <DialogTitle>저장할 폴더를 선택하세요</DialogTitle>
      <List sx={{ padding: 2, pt: 0 }}>
        {scrapDocs &&
          scrapDocs.map(({ title, storageObjectId }) => (
            <ListItem disableGutters key={storageObjectId}>
              <ListItemButton
                onClick={() => handleListItemClick(storageObjectId, content)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'blue040.main', color: 'blue010.main' }}>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleDisplayForm()}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='폴더 추가' />
          </ListItemButton>
        </ListItem>
        {isDisplay && (
          <Box component='form' onSubmit={handleSubmit(createScrapDoc)}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField
                {...title}
                placeholder='생성할 폴더를 입력하세요'
                sx={{ mt: 2, width: '100%' }}
                error={titleState.error && true}
                helperText={titleState.error && titleState.error.message}
              />
            </Box>
            <Stack flexDirection='row' justifyContent='flex-end' mt={2}>
              <Button onClick={handleDisplayForm}>취소</Button>
              <Button type='submit'>생성</Button>
            </Stack>
          </Box>
        )}
      </List>
    </Dialog>
  );
};

export default ScrapDialog;
