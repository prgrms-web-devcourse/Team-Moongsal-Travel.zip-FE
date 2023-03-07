import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getTravelogueListByKeyword } from '@/api/travelogue';
import { TravelogueFeed } from '@/components/Travelogue';
import { TravelogueFeedType } from '@/types/travelogue';

const TravelogueList = () => {
  const router = useRouter();
  const [travelogues, setTravelogues] = useState<TravelogueFeedType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTravelogues = async () => {
      if (router.isReady && typeof router.query.keyword === 'string') {
        try {
          setIsLoading(true);
          const response = await getTravelogueListByKeyword(router.query.keyword);
          setTravelogues(response);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchTravelogues();
  }, [router.isReady, router.query.keyword]);

  if (!travelogues || travelogues.length === 0) {
    return null;
  }

  return (
    <div>
      {isLoading ? (
        <div>로딩중...</div>
      ) : (
        <div>
          {travelogues &&
            travelogues.map((travelogue) => (
              <TravelogueFeed key={String(travelogue.travelogueId)} data={travelogue} />
            ))}
        </div>
      )}
    </div>
  );
};

export default TravelogueList;
