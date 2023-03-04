import AWS from 'aws-sdk';
import { ChangeEvent } from 'react';

import {
  ACCESS_KEY_ID,
  IMAGE_EXTENSION,
  IMAGE_TYPE,
  REGION,
  S3_BUCKET,
  SECRET_ACCESS_KEY,
} from '@/constants';

const useImageUpload = () => {
  const s3 = new AWS.S3({ params: { ACL: 'public-read' } });

  AWS.config.update({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
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
    let location = '';
    const upload = s3.upload({ Bucket: S3_BUCKET, Body: file, Key: key });
    await upload.promise().then(({ Location }) => (location = Location));
    return location;
  };

  const deleteFile = async (key: string) => {
    s3.deleteObject({ Bucket: S3_BUCKET, Key: key });
  };

  return { deleteFile, handleFileInput, uploadFile };
};

export default useImageUpload;