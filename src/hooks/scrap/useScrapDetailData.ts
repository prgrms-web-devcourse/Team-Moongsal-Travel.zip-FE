import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

import { deleteScrap, getScrapDetail } from '@/api/scrap';
import { ScrapDetailType } from '@/types/scrap';

const useScrapDetailData = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrapId, setScrapId] = useState<string>('');
  const [scrapTitle, setScrapTitle] = useState();
  const [scrapContents, setScrapContents] = useState<ScrapDetailType[]>();
  const [postId, setPostId] = useState<string>('');
  const router = useRouter();
  const open = Boolean(anchorEl);

  const fetchScrap = useCallback(async () => {
    if (router.isReady && typeof router.query.docId === 'string') {
      const { data } = await getScrapDetail(router.query.docId);
      setScrapTitle(data.title);
      setScrapContents(data.contents);
    }
  }, [router.isReady, router.query.docId]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    scrapId: string,
    postId: string,
  ) => {
    setScrapId(scrapId);
    setPostId(postId);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteScrapItem = async () => {
    handleClose();
    if (router.isReady && typeof router.query.docId === 'string') {
      deleteScrap(router.query.docId, scrapId);
      setScrapContents(
        (prevContents) =>
          prevContents &&
          prevContents.filter((content) => content.scrapObjectId !== scrapId),
      );
    }
  };

  return {
    anchorEl,
    scrapTitle,
    scrapContents,
    postId,
    open,
    fetchScrap,
    handleClick,
    handleClose,
    deleteScrapItem,
  };
};

export default useScrapDetailData;
