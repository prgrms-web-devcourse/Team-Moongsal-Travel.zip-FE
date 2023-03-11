import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
// import ImageResize from 'quill-image-resize';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';

import useImageUpload from '@/hooks/useImageUpload';
import { SubTravelogueType } from '@/types/post';

import { editorModules } from './index';

// Quill.register('modules/ImageResize', ImageResize);

// const { Quill } = await import('react-quill');

const Reactquill =
  typeof window === 'object'
    ? dynamic(
        async () => {
          const { default: RQ } = await import('react-quill');
          const { default: ImageResize } = await import('quill-image-resize');

          const comp = ({
            forwardedRef,
            ...props
          }: {
            forwardedRef: RefObject<ReactQuill>;
            [key: string]: any;
          }) => {
            const { Quill } = RQ;
            // const { Quill } = await import('react-quill');
            Quill.register('modules/imageResize', ImageResize);
            return <RQ ref={forwardedRef} {...props} />;
          };
          return comp;
        },
        {
          ssr: false,
        },
      )
    : () => null;
interface RichEditorType {
  content: ControllerRenderProps<SubTravelogueType, 'content'>;
}

const RichEditor = ({ content }: RichEditorType) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const quillRef = useRef<ReactQuill>(null);
  const { getImageUrlFromS3, deleteFile } = useImageUpload();

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
      ImageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  );

  return (
    <div>
      <Reactquill forwardedRef={quillRef} {...content} theme='snow' modules={modules} />
    </div>
  );
};

export default RichEditor;
