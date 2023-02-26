import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FlightIcon from '@mui/icons-material/Flight';
import PaymentIcon from '@mui/icons-material/Payment';
import PublicIcon from '@mui/icons-material/Public';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { SubTitle, Title } from '@/components/common';

const Detail = () => {
  return (
    <Box sx={layout}>
      <Title bold='bold'>여기 제목</Title>
      <Box sx={{ display: 'flex', gap: '1rem', mb: '1rem' }}>
        <span>여기 프로필</span>
        <div>여기 조회수</div>
      </Box>
      <Box sx={{ width: '80%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <Underline>여행지</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <PublicIcon color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                일본
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>여행기간</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <DateRangeOutlinedIcon color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                3박4일
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>여행경비</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <PaymentIcon color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                138만원
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>이동수단</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              {/* Svgicon 조건별 출력
            <SvgIcon component={아이콘 이름} /> */}
              {}
              <FlightIcon color='gray030' />
              <DirectionsBusIcon color='gray030' />
              <DirectionsCarIcon color='gray030' />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Detail;

const layout = { padding: '0 24px' };

const Underline = styled('div')(({ theme }) => ({
  '&:after': {
    display: 'block',
    width: '8rem',
    borderBottom: `solid 1px ${theme.palette.gray020.main}`,
    content: '""',
  },
}));
