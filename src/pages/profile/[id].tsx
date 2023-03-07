import { Management } from '@/components/Profile';

const DUMMY_DATA = {
  email: 'dodnjs1241@naver.com',
  nickname: '예오닝',
  birthYear: '1996',
  profileImageUrl: 'default',
};

const Profile = () => {
  return (
    <div>
      <Management
        profileImage={DUMMY_DATA.profileImageUrl}
        nickname={DUMMY_DATA.nickname}
      />
    </div>
  );
};

export default Profile;
