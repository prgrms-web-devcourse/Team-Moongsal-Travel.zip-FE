import { styled } from '@mui/material';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default MobileLayout;

const Container = styled('div')(({ theme }) => ({
  height: '100%',
  boxSizing: 'border-box',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    minWidth: '390px',
    maxWidth: '414px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '340px',
    maxWidth: '600px',
  },
}));
