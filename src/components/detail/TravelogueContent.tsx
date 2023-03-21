import { ConnectingAirports as ConnectingAirportsIcon } from '@mui/icons-material';
import { Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Parser from 'html-react-parser';
import { useRouter } from 'next/router';

import { Title } from '@/components/common';
import { VisitedRegionList } from '@/components/detail';
import { SubTravelogueDetailType } from '@/types/detail';

interface TravelogueContentProps {
  travelogueId: number;
  isWriter: boolean;
  subTravelogue: SubTravelogueDetailType;
}

const TravelogueContent = ({
  travelogueId,
  isWriter,
  subTravelogue,
}: TravelogueContentProps) => {
  const { subTravelogueId: id, day, title, content, addresses } = subTravelogue;
  const router = useRouter();

  const handleEditClick = () => {
    router.push({
      pathname: '/travelogue/[id]',
      query: { id, travelogueId, day, edit: true },
    });
  };

  const limitImageMaxSize = () => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const imageList = doc.getElementsByTagName('img');
    Array.from(imageList).map((img) => img.setAttribute('style', 'max-width: 350px'));
    return doc.body.innerHTML;
  };

  return (
    <Card variant='outlined' sx={{ borderRadius: '10px' }}>
      <CardContent>
        <Stack>
          <Stack direction='row' alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction='row' spacing={0.7} alignItems={'center'}>
              <ConnectingAirportsIcon color={'blue050'} />
              <Typography
                variant='subtitle1'
                color='dark.main'>{`${day}일차`}</Typography>
            </Stack>
            {isWriter && (
              <Button
                variant='text'
                sx={{ minWidth: 0 }}
                color='blue050'
                onClick={handleEditClick}>
                수정
              </Button>
            )}
          </Stack>
          <Title bold='bold' color='dark.main' sx={{ mt: 1, fontSize: '1.3rem' }}>
            {title}
          </Title>
          <Divider sx={{ my: 2 }} />
          <Stack sx={{ lineHeight: 1.7, fontSize: '15px', color: 'dark.main' }}>
            {Parser(limitImageMaxSize())}
          </Stack>
          <VisitedRegionList addresses={addresses} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TravelogueContent;
