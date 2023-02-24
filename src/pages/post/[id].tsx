// import { useRouter } from 'next/router';

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';

import ComplexButton from '@/components/CreatePost/ComplexButton';
import SubTitle from '@/components/CreatePost/SubTitle';
import Title from '@/components/CreatePost/Titlte';

const Post = () => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <Box sx={{ padding: '0 24px' }}>
      <Stack spacing={2}>
        <Title>여행 기본 정보를 입력해주세요</Title>
        <Stack>
          <SubTitle>여행 유형</SubTitle>
          <ComplexButton />
        </Stack>
        <Stack spacing={1}>
          <SubTitle>방문한 지역</SubTitle>
          <Box sx={locationBoxStyle}>
            <TextField fullWidth label='지역을 입력하세요' type='text' />
            <IconButton sx={{ position: 'absolute', right: 0, top: '0.5rem' }}>
              <LocationOnOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <SubTitle>여행 기간</SubTitle>
          <Box sx={{ ...locationBoxStyle, flexDirection: 'row', gap: 4 }}>
            <TextField fullWidth label='시작 날짜' type='text' />
            <IconButton sx={{ position: 'absolute', left: '8rem', top: '0.5rem' }}>
              <CalendarMonthOutlinedIcon />
            </IconButton>
            <TextField fullWidth label='종료 날짜' type='text' />
            <IconButton sx={{ position: 'absolute', right: '0rem', top: '0.5rem' }}>
              <CalendarMonthOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <SubTitle>총 경비</SubTitle>
          <Box sx={locationBoxStyle}>
            <TextField fullWidth label='이번 여행의 총 경비를 입력하세요' type='text' />
          </Box>
        </Stack>
      </Stack>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant='contained' sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='body1' component='span' sx={{ fontSize: '0.5rem' }}>
            작성
          </Typography>
          {<ArrowForwardIosOutlinedIcon sx={{ fontSize: '0.5rem' }} />}
        </Button>
      </Box>
    </Box>
  );
};

export default Post;

const locationBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '15px',
  position: 'relative',
};
