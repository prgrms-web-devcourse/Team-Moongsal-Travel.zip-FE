import { Delete as DeleteIcon, Folder as FolderIcon } from '@mui/icons-material';
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';

import { getScrapDocument } from '@/api/scrap';

const DUMMY_DATA = {
  list: [
    { storageObjectId: '640abc577baac103361ac6e1', title: '일본 여행' },
    { storageObjectId: '640abc577baac103361ac6e', title: '제주도 여행' },
    { storageObjectId: '640abc577baac103361ac1', title: '유럽 여행' },
  ],
};

const Scrap = () => {
  // const [scrapDocs, setScrapDocs] = useState([]);

  useEffect(() => {
    const fetchScrapDoc = async () => {
      const response = await getScrapDocument();
      console.log(response);
    };
    fetchScrapDoc();
  }, []);

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
        스크랩
      </Typography>
      <List dense={false}>
        {DUMMY_DATA.list.map(({ title, storageObjectId }) => (
          <ListItem
            key={storageObjectId}
            secondaryAction={
              <IconButton edge='end' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            }>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Button>폴더 추가</Button>
    </>
  );
};

export default Scrap;
