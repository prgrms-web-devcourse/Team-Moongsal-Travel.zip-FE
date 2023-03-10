import { Delete as DeleteIcon, Folder as FolderIcon } from '@mui/icons-material';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

const Scrap = () => {
  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
        스크랩
      </Typography>
      <List dense={false}>
        <ListItem
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
          <ListItemText primary='Single-line item' />
        </ListItem>
      </List>
    </>
  );
};

export default Scrap;
