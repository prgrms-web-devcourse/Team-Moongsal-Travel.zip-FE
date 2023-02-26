import {
  DateRangeOutlined,
  DirectionsBus,
  DirectionsCar,
  Flight,
  Payment,
  Public,
} from '@mui/icons-material';
import { Grid, Stack, SvgIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SubTitle } from '@/components/common';

const dummyData = [
  {
    title: '여행지',
    subtitle: '일본',
    icons: [Public],
  },
  {
    title: '여행기간',
    subtitle: '3박4일',
    icons: [DateRangeOutlined],
  },
  {
    title: '여행경비',
    subtitle: '138만원',
    icons: [Payment],
  },
  {
    title: '이동수단',
    icons: [Flight, DirectionsBus, DirectionsCar],
  },
];

const PostCategory = () => {
  return (
    <>
      <Grid container rowSpacing={1}>
        {dummyData.map(({ title, subtitle, icons }) => (
          <Grid item xs={6} key={title}>
            <Underline>{title}</Underline>
            <Stack flexDirection='row' mt='0.3rem'>
              {icons.map((icon, i) => (
                <SvgIcon component={icon} color='gray030' key={i} />
              ))}
              <SubTitle color='gray030.main' bold='bold' fontSize='1rem'>
                {subtitle}
              </SubTitle>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostCategory;

const Underline = styled('div')(({ theme }) => ({
  '&:after': {
    display: 'block',
    width: '8rem',
    borderBottom: `solid 1px ${theme.palette.gray020.main}`,
    content: '""',
  },
}));
