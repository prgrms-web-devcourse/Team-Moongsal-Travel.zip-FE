import { DateRangeOutlined, DirectionsCar, Payment, Public } from '@mui/icons-material';
import { Grid, List } from '@mui/material';

import TravelInfoItem from '@/components/PostDetail/TravelInfoItem';
import { TRANSPORT_TYPE } from '@/constants';
import { TravelogueDetailType } from '@/types/travelogue';

interface PostCategoryProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelInfo = ({ travelogueDetail }: PostCategoryProps) => {
  const { country, nights, days, totalCost, transportations } = travelogueDetail;

  const transportationIcons = transportations.flatMap((transport) => {
    const icon = TRANSPORT_TYPE.find(({ type }) => type === transport)?.icon;
    return icon ? [icon] : [];
  });

  return (
    <Grid container>
      <List sx={ListStyle}>
        <TravelInfoItem title='여행지' value={country} icon={Public} />
        <TravelInfoItem
          title='여행기간'
          value={`${nights}박 ${days}일`}
          icon={DateRangeOutlined}
        />
      </List>
      <List sx={ListStyle}>
        <TravelInfoItem
          title='여행경비'
          value={`${totalCost.toLocaleString('ko-KR')}원`}
          icon={Payment}
        />
        <TravelInfoItem
          title='이동수단'
          value={transportationIcons}
          icon={DirectionsCar}
        />
      </List>
    </Grid>
  );
};

export default TravelInfo;

const ListStyle = {
  width: '50%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
