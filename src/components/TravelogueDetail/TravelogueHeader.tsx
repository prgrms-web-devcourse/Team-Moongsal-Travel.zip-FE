import { Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Title } from '@/components/common';
import { TravelogueDetailType } from '@/types/travelogue';

import { TravelInfo, TravelogueInfo } from '.';

interface PostInfoProps {
  authority: string;
  travelogueDetail: TravelogueDetailType;
}

const TravelogueHeader = ({ authority, travelogueDetail }: PostInfoProps) => {
  const { title, thumbnail } = travelogueDetail;
  const router = useRouter();

  const handleEditClick = () => {
    router.push({
      pathname: '/post/first',
      query: { travelogueId: router.query.travelogueId, edit: true },
    });
  };

  return (
    <Stack spacing={0.5}>
      <Title bold='bold' sx={{ mt: 2 }}>
        {title}
      </Title>
      <Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
        <TravelogueInfo travelogueDetail={travelogueDetail} />
        {authority === 'writer' && (
          <Stack direction='row' spacing={1}>
            <Button variant='text' sx={{ minWidth: 0 }} onClick={handleEditClick}>
              수정
            </Button>
            <Button variant='text' sx={{ minWidth: 0, ml: 0 }}>
              삭제
            </Button>
          </Stack>
        )}
      </Stack>
      <Box sx={{ position: 'relative', width: '100%', height: '220px' }}>
        <Image src={thumbnail} fill alt='thumbnail' style={{ borderRadius: '10px' }} />
      </Box>
      <TravelInfo travelogueDetail={travelogueDetail} />
    </Stack>
  );
};

export default TravelogueHeader;
