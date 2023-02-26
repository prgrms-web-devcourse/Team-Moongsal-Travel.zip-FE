import {
  DateRangeOutlined,
  DirectionsBus,
  DirectionsCar,
  Flight,
  Payment,
  Public,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Avatar, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import { SubTitle, Title } from '@/components/common';

interface PostInfo {
  authority: string;
}

const PostInfo = ({ authority }: PostInfo) => {
  return (
    <Box>
      <Title bold='bold'>여기 제목</Title>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '1rem' }}>
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Avatar src='default' sx={{ width: '1rem', height: '1rem' }} />
            <SubTitle fontSize='0.8rem' color='gray030.main'>
              닉네임
            </SubTitle>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <VisibilityOutlined color='gray030' sx={{ width: '1rem', height: '1rem' }} />
            <SubTitle fontSize='0.8rem' color='gray030.main'>
              123123회
            </SubTitle>
          </Box>
        </Box>
        {authority === 'writer' && (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <div>수정</div>
            <div>삭제</div>
          </Box>
        )}
      </Box>
      <Box sx={{ width: '80%' }}>
        <Grid container rowSpacing={1}>
          <Grid item xs={6}>
            <Underline>여행지</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <Public color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                일본
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>여행기간</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <DateRangeOutlined color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                3박4일
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>여행경비</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              <Payment color='gray030' />
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                138만원
              </SubTitle>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Underline>이동수단</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              {/* SvgIcon 조건별 출력
            <SvgIcon component={아이콘 이름} /> */}
              {}
              <Flight color='gray030' />
              <DirectionsBus color='gray030' />
              <DirectionsCar color='gray030' />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PostInfo;

const Underline = styled('div')(({ theme }) => ({
  '&:after': {
    display: 'block',
    width: '8rem',
    borderBottom: `solid 1px ${theme.palette.gray020.main}`,
    content: '""',
  },
}));
