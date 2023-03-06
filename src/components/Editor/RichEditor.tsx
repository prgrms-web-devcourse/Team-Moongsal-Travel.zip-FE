import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import AWS from 'aws-sdk';
import dynamic from 'next/dynamic';
import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { v4 } from 'uuid';

import { ACCESS_KEY_ID, REGION, S3_BUCKET, SECRET_ACCESS_KEY } from '@/constants';
import { SubTravelogueFormType } from '@/types/post';

const Reactquill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    const comp = ({
      forwardedRef,
      ...props
    }: {
      forwardedRef: RefObject<ReactQuill>;
      [key: string]: any;
    }) => {
      return <RQ ref={forwardedRef} {...props} />;
    };
    return comp;
  },
  {
    ssr: false,
  },
);

interface RichEditorType {
  content: ControllerRenderProps<SubTravelogueFormType, 'content'>;
}

const RichEditor = ({ content }: RichEditorType) => {
  const [imageList, setImageList] = useState<string[]>([]);
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    AWS.config.update({
      accessKeyId: ACCESS_KEY_ID,
      secretAccessKey: SECRET_ACCESS_KEY,
      region: REGION,
    });
  }, []);

  const imageS3 = () => {
    const s3 = new AWS.S3({ params: { ACL: 'public-read' } });

    const uploadFile = ({ file, key }: { file: File; key: string }) => {
      const upload = s3.upload({
        Bucket: S3_BUCKET,
        Body: file,
        Key: key,
        ContentType: file.type,
      });
      return upload.promise();
    };

    const getImageUrlFromS3 = async (file: File) => {
      const key = 'upload/' + v4() + file.name;
      const url = await uploadFile({ file, key })?.then(({ Location }) => Location);
      return { key, url };
    };

    const deleteFile = (key: string) => {
      s3.deleteObject({ Bucket: S3_BUCKET, Key: key }).send();
    };

    return { getImageUrlFromS3, deleteFile };
  };

  const imageHandler = () => {
    const { getImageUrlFromS3 } = imageS3();
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.click();

    input.onchange = async () => {
      const file = input.files;
      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection(true).index;
      if (file) {
        const { url, key } = await getImageUrlFromS3(file[0]);
        console.log(key);
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
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
            { background: [] },
          ],
          ['image'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  const { deleteFile } = imageS3();

  imageList.map((item) => {
    if (!content.value.includes(item)) {
      const key = item.match(/upload\/(.*)$/);
      key && deleteFile(key[0]);
    }
  });

  return (
    <div>
      <Reactquill forwardedRef={quillRef} {...content} theme='snow' modules={modules} />
    </div>
  );
};

export default RichEditor;
