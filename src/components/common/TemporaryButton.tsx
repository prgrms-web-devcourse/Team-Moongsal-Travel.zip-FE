import { Box, Stack } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import Link from 'next/link';

const TemporaryButton = () => {
  return (
    <Stack spacing={4} direction='row' justifyContent='space-between'>
      <CustomBox>
        <CustomLink href='/auth/login'>로그인</CustomLink>
      </CustomBox>
      <CustomBox>
        <CustomLink href='/post/1'>피드작성</CustomLink>
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

const CustomLink = muiStyled(Link)(({ theme }) => ({
  display: 'inline-block',
  padding: '10px',
  color: theme.palette.white.main,
  fontWeight: 'bold',
}));
