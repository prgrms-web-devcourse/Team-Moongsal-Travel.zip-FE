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

const FOLDERS = ['폴더1', '폴더2'];

export interface ScrapDialogProps {
  open: boolean;
  onClose: () => void;
}

const ScrapDialog = ({ open, onClose }: ScrapDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>스크랩할 폴더를 선택하세요</DialogTitle>
      <List sx={{ pt: 0 }}>
        {FOLDERS.map((folder) => (
          <ListItem disableGutters key={folder}>
            <ListItemButton onClick={() => handleListItemClick()}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'blue070.main', color: 'blue010.main' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={folder} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={() => handleListItemClick()}>
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
