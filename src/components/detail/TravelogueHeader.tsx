import { Box, Button, Stack } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Title } from '@/components/common/Title';
import { TravelogueDetailType } from '@/types/detail';

import { TravelInfo, TravelogueInfo } from '.';

interface PostInfoProps {
  travelogueDetail: TravelogueDetailType;
}

const TravelogueHeader = ({ travelogueDetail }: PostInfoProps) => {
  const { title, thumbnail, isWriter } = travelogueDetail;
  const router = useRouter();

  const handleEditClick = () => {
    router.push({
      pathname: '/travelogue',
      query: { travelogueId: router.query.travelogueId, edit: true },
    });
  };

  return (
    <Stack>
      <Title bold='bold' color='dark.main' sx={{ mt: 2 }}>
        {title}
      </Title>
      <Stack
        direction='row'
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={0.5}>
        <TravelogueInfo travelogueDetail={travelogueDetail} />
        {isWriter && (
          <Stack direction='row' spacing={1}>
            <Button
              variant='text'
              sx={{ minWidth: 0 }}
              color='blue050'
              onClick={handleEditClick}>
              수정
            </Button>
            <Button variant='text' sx={{ minWidth: 0, ml: 0 }} color='blue050'>
              삭제
            </Button>
          </Stack>
        )}
      </Stack>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '230px',
          mt: 1,
        }}>
        <Image
          src={thumbnail}
          fill
          alt='thumbnail'
          style={{ borderRadius: '10px' }}
          sizes='300px'
          priority
        />
      </Box>
      <TravelInfo travelogueDetail={travelogueDetail} />
    </Stack>
  );
};

export default TravelogueHeader;
