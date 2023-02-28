import { Stack } from '@mui/material';

import { FeedContent, FeedHeader, FeedImage } from '@/components/Travelogue';

const DUMMY_DATA = {
  title: '일본 오사카 여행기',
  nights: 3,
  days: 4,
  totalCost: 400000,
  country: '일본',
  thumbnail:
    'https://firebasestorage.googleapis.com/v0/b/junglee-habit.appspot.com/o/challanges%2FIMQBHIsoNIMngElt9sRf%2F0aWv3BRsSVJMcz5yU4uS?alt=media&token=6dce71b4-e11f-4fa3-9b5a-fab54bb100d8',
  member: {
    nickname: 'moen',
    profileImageUrl: 'https://mui.com/static/images/avatar/3.jpg',
  },
};

const TravelogueFeed = () => {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: '90%', height: 300 }}>
      <FeedHeader
        profileImage={DUMMY_DATA.member.profileImageUrl}
        nickname={DUMMY_DATA.member.nickname}
        country={DUMMY_DATA.country}
      />
      <FeedImage thumbnailURL={DUMMY_DATA.thumbnail} ImageAlt={DUMMY_DATA.title} />
      <FeedContent
        title={DUMMY_DATA.title}
        totalCost={DUMMY_DATA.totalCost}
        nights={DUMMY_DATA.nights}
        days={DUMMY_DATA.days}
      />
    </Stack>
  );
};

export default TravelogueFeed;
