import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { createScrapDocument, deleteScrapDocument, getScrapDocument } from '@/api/scrap';
import { scrapFormDefault } from '@/constants/defaultFormValue';
import { ScrapDocInfoType, ScrapDocsFormType } from '@/types/scrap';

import useScrapDocsForm from './useScrapDocsForm';

const useScrapDocsData = () => {
  const [scrapDocs, setScrapDocs] = useState<ScrapDocInfoType[]>();
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, reset } = useForm<ScrapDocsFormType>(scrapFormDefault);
  const { title, titleState } = useScrapDocsForm(control);

  const fetchScrapDoc = useCallback(async () => {
    const response = await getScrapDocument();
    setScrapDocs(response.data.list);
  }, []);

  const createScrapDoc = async (data: ScrapDocsFormType) => {
    const { status } = await createScrapDocument(data.title);
    setOpen(false);
    reset();
    if (status === 200) {
      const response = await getScrapDocument();
      setScrapDocs(response.data.list);
    }
  };

  const deleteScrapDoc = (docId: string) => {
    deleteScrapDocument(docId);
    setScrapDocs(
      (prevDocs) => prevDocs && prevDocs.filter((doc) => doc.storageObjectId !== docId),
    );
  };

  return {
    scrapDocs,
    setScrapDocs,
    open,
    setOpen,
    title,
    titleState,
    fetchScrapDoc,
    createScrapDoc,
    deleteScrapDoc,
    handleSubmit,
  };
};

export default useScrapDocsData;
