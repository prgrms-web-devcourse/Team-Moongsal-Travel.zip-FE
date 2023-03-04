import AWS from 'aws-sdk';
import { ChangeEvent, useState } from 'react';

import { IMAGE_EXTENSION, IMAGE_TYPE } from '@/constants';

const useImageUpload = () => {
  const S3_BUCKET = 'travel-zip-bucket';
  const [location, setLocation] = useState('');
  const s3 = new AWS.S3({ params: { ACL: 'public-read' } });

  AWS.config.update({
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    region: 'ap-northeast-2',
  });

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size >= 1 * 1024 * 1024) {
        alert('1mb 이하의 파일만 업로드 가능합니다.');
        return;
      }
      const fileExtension = file.name.split('.').pop() ?? '';
      if (!IMAGE_TYPE.includes(file.type) || !IMAGE_EXTENSION.includes(fileExtension)) {
        alert('jpeg/png 파일만 Upload 가능합니다.');
        return;
      }
    }
  };

  const uploadFile = async (file: File, key: string) => {
    const upload = s3.upload({ Bucket: S3_BUCKET, Body: file, Key: key });
    await upload.promise().then(({ Location }) => setLocation(Location));
  };

  const deleteFile = async (key: string) => {
    s3.deleteObject({ Bucket: S3_BUCKET, Key: key });
  };

  return { location, deleteFile, handleFileInput, uploadFile };
};

export default useImageUpload;
