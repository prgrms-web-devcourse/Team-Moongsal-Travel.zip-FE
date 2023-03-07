import {
  ArrowForwardIos as ArrowForwardIcon,
  Bookmarks as BookmarksIcon,
  Edit as EditIcon,
  SaveAs as SaveAsIcon,
} from '@mui/icons-material';
import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface ContentLinkProps {
  contentName: string;
  route: string;
  iconName: 'edit' | 'bookmark' | 'temporarySave';
}

const ContentLink = ({ contentName, route, iconName }: ContentLinkProps) => {
  console.log(route);

  let IconComponent: ReactNode;

  switch (iconName) {
    case 'edit':
      IconComponent = <EditIcon />;
      break;
    case 'bookmark':
      IconComponent = <BookmarksIcon />;
      break;
    case 'temporarySave':
      IconComponent = <SaveAsIcon />;
      break;
  }

  return (
    <Button startIcon={IconComponent} endIcon={<ArrowForwardIcon />} sx={buttonStyle}>
      {contentName}
    </Button>
  );
};

export default ContentLink;

const buttonStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 0,
  py: 3,
  px: 2,
  font: '1.2rem bold',
  color: 'dark.main',
  mb: 0.5,
  boxShadow: 3,
} as const;

// const iconStyle = {
//   color: 'blue040.main',
// };

// const CustomArrowForwardIcon = styled(ArrowForwardIcon)(({ theme }) => ({
//   ...iconStyle,
//   color: theme.palette.blue040.main,
// }));
