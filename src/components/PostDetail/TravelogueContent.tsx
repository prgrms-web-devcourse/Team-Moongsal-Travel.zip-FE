import { ConnectingAirports as ConnectingAirportsIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Parser from 'html-react-parser';

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
          <Box>{Parser(content)}</Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TravelogueContent;
