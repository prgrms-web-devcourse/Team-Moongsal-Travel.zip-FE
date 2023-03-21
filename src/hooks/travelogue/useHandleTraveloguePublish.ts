import { useRouter } from 'next/router';

import { usePatchTraveloguePublish } from '@/hooks/query/travelogue';

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
