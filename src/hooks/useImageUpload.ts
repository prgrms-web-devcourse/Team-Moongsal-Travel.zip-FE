import AWS from 'aws-sdk';
import { ChangeEvent, useState } from 'react';
import { v4 } from 'uuid';

import { IMAGE_EXTENSION, IMAGE_TYPE } from '@/constants';

const useImageUpload = () => {
  const S3_BUCKET = 'travel-zip-bucket';
  const [location, setLocation] = useState('');

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

  const uploadFile = async (file: File) => {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: 'upload/' + v4() + file?.name,
      },
    });
    await upload.promise().then(({ Location }) => setLocation(Location));
  };

  return { location, handleFileInput, uploadFile };
};

export default useImageUpload;
