import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { getScrapDetail } from '@/api/scrap';
import { ScrapDetailType } from '@/types/scrap';

const ScrapDetail = () => {
  const [scrapTitle, setScrapTitle] = useState();
  const [scrapContents, setScrapContents] = useState<ScrapDetailType[]>();
  const router = useRouter();

  useEffect(() => {
    const fetchScrapDoc = async () => {
      if (router.isReady && typeof router.query.docId === 'string') {
        const { data } = await getScrapDetail(router.query.docId);
        setScrapTitle(data.title);
        setScrapContents(data.contents);
      }
    };
    fetchScrapDoc();
  }, [router]);

  return (
    <>
      <div>{scrapTitle}</div>
      <div>
        {scrapContents &&
          scrapContents.map(({ scrapObjectId, placeName }) => (
            <div key={scrapObjectId}>{placeName}</div>
          ))}
      </div>
    </>
  );
};

export default ScrapDetail;
