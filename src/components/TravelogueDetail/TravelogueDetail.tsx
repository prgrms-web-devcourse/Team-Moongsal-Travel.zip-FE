import { Stack } from '@mui/material';

import TravelogueContent from '@/components/TravelogueDetail/TravelogueContent';
import TravelogueHeader from '@/components/TravelogueDetail/TravelogueHeader';
import { TravelogueDetailType } from '@/types/travelogue';

interface TravelogueDetailProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueDetail = ({ travelogueDetail }: TravelogueDetailProps) => {
  const authority = 'writer'; // viewer
  const { id, subTravelogues } = travelogueDetail;

  return (
    <Stack spacing={3}>
      <TravelogueHeader authority={authority} travelogueDetail={travelogueDetail} />
      {subTravelogues.map((subTravelogue) => (
        <TravelogueContent
          key={subTravelogue.subTravelogueId}
          travelogueId={id}
          subTravelogue={subTravelogue}
        />
      ))}
    </Stack>
  );
};

export default TravelogueDetail;
