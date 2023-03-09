import { DateRangeOutlined, DirectionsCar, Payment, Public } from '@mui/icons-material';
import { Grid, List } from '@mui/material';

import TravelInfo from '@/components/PostDetail/TravelInfo';
import { TRANSPORT_TYPE } from '@/constants';
import { TravelogueDetailType } from '@/types/travelogue';

interface PostCategoryProps {
  travelogueDetail: TravelogueDetailType;
}

const PostCategory = ({ travelogueDetail }: PostCategoryProps) => {
  const { country, nights, days, totalCost, transportations } = travelogueDetail;

  const transportationIcons = transportations.flatMap((transport) => {
    const icon = TRANSPORT_TYPE.find(({ type }) => type === transport)?.icon;
    return icon ? [icon] : [];
  });

  return (
    <Grid container rowSpacing={2} justifyContent='center'>
      <List sx={ListStyle}>
        <TravelInfo title='여행지' value={country} icon={Public} />
        <TravelInfo
          title='여행기간'
          value={`${nights}박 ${days}일`}
          icon={DateRangeOutlined}
        />
      </List>
      <List sx={ListStyle}>
        <TravelInfo
          title='여행경비'
          value={`${totalCost.toLocaleString('ko-KR')}원`}
          icon={Payment}
        />
        <TravelInfo title='이동수단' value={transportationIcons} icon={DirectionsCar} />
      </List>
    </Grid>
  );
};

export default PostCategory;

const ListStyle = {
  width: '50%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
