import { styled } from '@mui/material';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default MobileLayout;

const Container = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  width: '414px',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    minWidth: '414px',
  },
}));
