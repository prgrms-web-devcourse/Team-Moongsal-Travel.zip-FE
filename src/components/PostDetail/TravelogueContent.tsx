import { ConnectingAirports as ConnectingAirportsIcon } from '@mui/icons-material';
import { Card, CardContent, Stack, Typography } from '@mui/material';

import { Title } from '@/components/common';
import { SubTravelogueType } from '@/types/post';

interface PostContentsProps {
  subTravelogue: SubTravelogueType;
}

const TravelogueContent = ({ subTravelogue }: PostContentsProps) => {
  const { day, title, content } = subTravelogue;

  return (
    <Card variant='outlined'>
      <CardContent>
        <Stack>
          <Stack direction='row' spacing={0.5} alignItems={'center'}>
            <ConnectingAirportsIcon color={'blue050'} />
            <Typography variant='subtitle1' color='dark.main'>{`${day}일차`}</Typography>
          </Stack>
          <Title>{title}</Title>
          <Typography variant='body2'>{content}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TravelogueContent;
