// import { useRouter } from 'next/router';

import ComplexButton from '@/components/CreatePost/ComplexButton';
import SubTitle from '@/components/CreatePost/SubTitle';
import Title from '@/components/CreatePost/Titlte';

const Post = () => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Title>여행 기본 정보를 입력해주세요</Title>
      <SubTitle>여행 유형</SubTitle>
      <ComplexButton />
    </>
  );
};

export default Post;
