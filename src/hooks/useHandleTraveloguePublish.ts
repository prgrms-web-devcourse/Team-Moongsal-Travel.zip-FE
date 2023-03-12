import { useRouter } from 'next/router';

import { usePatchTraveloguePublish } from '@/api/hooks/post';

const useHandleTraveloguePublish = (travelogueId: string) => {
  const router = useRouter();
  const { mutate } = usePatchTraveloguePublish();

  const handleTraveloguePublish = () => {
    mutate(
      { travelogueId },
      {
        onSuccess: ({ data }) => {
          router.push({
            pathname: '/detail',
            query: { travelogueId: data.travelogueId },
          });
        },
      },
    );
  };

  return { handleTraveloguePublish };
};

export default useHandleTraveloguePublish;
