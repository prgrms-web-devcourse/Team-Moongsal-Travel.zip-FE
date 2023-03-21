import 'react-quill/dist/quill.snow.css';

import { Alert, Stack } from '@mui/material';
import ImageResize from 'quill-image-resize';
import { useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';

import { IMAGE_EXTENSION, IMAGE_TYPE } from '@/constants';
import useImageUpload from '@/hooks/common/useImageUpload';
import { SubTravelogueType } from '@/types/travelogue';

import { editorModules } from './index';

Quill.register('modules/imageResize', ImageResize);

interface RichEditorType {
  content: ControllerRenderProps<SubTravelogueType, 'content'>;
}

const RichEditor = ({ content }: RichEditorType) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const quillRef = useRef<ReactQuill>(null);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();
  const [isInvalidType, setIsInvalidType] = useState(false);

  useEffect(() => {
    imageList.map((item) => {
      if (!content.value.includes(item)) {
        const key = item.match(/upload\/(.*)$/);
        key && deleteFile(key[0]);
      }
    });
  }, [imageList, content.value]);

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.click();

    input.onchange = async () => {
      const file = input.files;
      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection(true).index;
      if (file) {
        const fileExtension = file[0].name.split('.').pop() ?? '';
        if (
          !IMAGE_TYPE.includes(file[0].type) ||
          !IMAGE_EXTENSION.includes(fileExtension)
        ) {
          setIsInvalidType(true);
          setTimeout(() => setIsInvalidType(false), 3000);
          return;
        }
        const { url } = await getImageUrlFromS3(file[0]);
        setImageList((prev) => [...prev, url]);
        if (range !== undefined) {
          editor?.insertEmbed(range, 'image', url);
          editor?.setSelection(range + 1, 0);
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: editorModules,
        handlers: {
          image: imageHandler,
        },
      },
      imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  );

  return (
    <Stack spacing={1}>
      <ReactQuill
        ref={quillRef}
        onChange={content.onChange}
        value={content.value}
        theme='snow'
        modules={modules}
      />
      {isInvalidType && (
        <Alert severity='error'>jpeg/png 파일만 Upload 가능합니다.</Alert>
      )}
    </Stack>
  );
};

export default RichEditor;
