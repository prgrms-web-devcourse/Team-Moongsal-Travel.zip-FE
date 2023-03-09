import { Button, Stack } from '@mui/material';

import { Title } from '@/components/common';
import { TravelogueDetailType } from '@/types/travelogue';

import { TravelInfo, TravelogueInfo } from '.';

interface PostInfoProps {
  authority: string;
  travelogueDetail: TravelogueDetailType;
}

const TravelogueHeader = ({ authority, travelogueDetail }: PostInfoProps) => {
  const { title } = travelogueDetail;

  return (
    <Stack spacing={1}>
      <Title bold='bold' sx={{ mt: 2 }}>
        {title}
      </Title>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
        <TravelogueInfo travelogueDetail={travelogueDetail} />
        {authority === 'writer' && (
          <Stack direction='row' spacing={1}>
            <Button variant='text' sx={{ minWidth: 0 }}>
              수정
            </Button>
            <Button variant='text' sx={{ minWidth: 0, p: 0 }}>
              삭제
            </Button>
          </Stack>
        )}
      </Stack>
      <TravelInfo travelogueDetail={travelogueDetail} />
    </Stack>
  );
};

export default TravelogueHeader;
