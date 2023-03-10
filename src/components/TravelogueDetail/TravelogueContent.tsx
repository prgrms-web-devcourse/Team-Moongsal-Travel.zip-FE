import { ConnectingAirports as ConnectingAirportsIcon } from '@mui/icons-material';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Parser from 'html-react-parser';

import { Title } from '@/components/common';
import { VisitedRegionList } from '@/components/TravelogueDetail';
import { SubTravelogueType } from '@/types/post';

interface PostContentsProps {
  subTravelogue: SubTravelogueType;
}

const TravelogueContent = ({ subTravelogue }: PostContentsProps) => {
  const { day, title, content, addresses } = subTravelogue;

  // const parser = new DOMParser();
  // const doc = parser.parseFromString(content, 'text/html');
  // console.log('doc', doc);
  // const imgList = doc.getElementsByTagName('img');
  // // console.log('imgList', imgList);
  // const aaa = Array.from(imgList).map((img) => img.setAttribute('style', 'max-width: 350px'));
  // console.log('aaa', aaa);
  // console.log('ccc', content);
  // console.log('parser', parser);
  // console.log('doc2', doc);
  // console.log('body', doc.body.innerHTML);
  // const tttttt = doc.body.innerHTML;

  return (
    <Card variant='outlined'>
      <CardContent>
        <Stack>
          <Stack direction='row' spacing={0.5} alignItems={'center'}>
            <ConnectingAirportsIcon color={'blue050'} />
            <Typography variant='subtitle1' color='dark.main'>{`${day}일차`}</Typography>
          </Stack>
          <Title bold='bold' sx={{ mt: 0.5 }}>
            {title}
          </Title>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ lineHeight: 1.5 }}>{Parser(content)}</Box>
          <VisitedRegionList addresses={addresses} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default TravelogueContent;
