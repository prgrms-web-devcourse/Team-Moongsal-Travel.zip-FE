import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import Link from 'next/link';

const TemporaryButton = () => {
  return (
    <Stack spacing={4} direction='row' justifyContent='space-between'>
      <CustomBox>
        <Link href='/auth/login'>
          <CustomLink>로그인</CustomLink>
        </Link>
      </CustomBox>
      <CustomBox>
        <Link href='/post/1'>
          <CustomLink>피드작성</CustomLink>
        </Link>
      </CustomBox>
    </Stack>
  );
};

export default TemporaryButton;

const CustomBox = muiStyled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.blue040.main}`,
  borderRadius: '5px',
  backgroundColor: theme.palette.blue050.main,
  color: theme.palette.white.main,
}));

const CustomLink = styled.a`
  display: inline-block;
  padding: 10px;
  color: #ffffff;
  font-weight: bold;
`;
