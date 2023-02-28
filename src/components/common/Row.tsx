import styled from '@emotion/styled';

interface RowProps {
  justifyContentType: string;
}

const Row = styled.div<RowProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContentType }) => justifyContentType};
  width: '100%';
`;

export default Row;
