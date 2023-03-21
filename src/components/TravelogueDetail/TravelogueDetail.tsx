import { Stack } from '@mui/material';

import TravelogueContent from '@/components/TravelogueDetail/TravelogueContent';
import TravelogueHeader from '@/components/TravelogueDetail/TravelogueHeader';
import { TravelogueDetailType } from '@/types/detail';

interface TravelogueDetailProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueDetail = ({ travelogueDetail }: TravelogueDetailProps) => {
  const { id, isWriter, subTravelogues } = travelogueDetail;

  return (
    <Stack spacing={3}>
      <TravelogueHeader travelogueDetail={travelogueDetail} />
      {subTravelogues.map((subTravelogue) => (
        <TravelogueContent
          key={subTravelogue.subTravelogueId}
          travelogueId={id}
          isWriter={isWriter}
          subTravelogue={subTravelogue}
        />
      ))}
    </Stack>
  );
};

export default TravelogueDetail;
