import styled from '@emotion/styled';

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default MobileLayout;

const Container = styled.div`
  box-sizing: border-box;
  min-width: 390px;
  max-width: 414px;
  /* height: 844px; */
  max-height: 844px;
  margin: auto;
  background: red;
`;
