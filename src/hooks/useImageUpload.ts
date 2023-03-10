import AWS from 'aws-sdk';
import { ChangeEvent } from 'react';
import { v4 } from 'uuid';

import {
  ACCESS_KEY_ID,
  IMAGE_EXTENSION,
  IMAGE_TYPE,
  REGION,
  S3_BUCKET,
  SECRET_ACCESS_KEY,
} from '@/constants';

const useImageUpload = () => {
  const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
    params: { ACL: 'public-read' },
  });

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const fileExtension = file.name.split('.').pop() ?? '';
      if (!IMAGE_TYPE.includes(file.type) || !IMAGE_EXTENSION.includes(fileExtension)) {
        return false;
      }
      return true;
    }
  };

  const uploadFile = ({ file, key }: { file: File; key: string }) => {
    const params = {
      Bucket: S3_BUCKET,
      Body: file,
      Key: key,
      ContentType: file.type,
    };
    return s3.upload(params).promise();
  };

  const getImageUrlFromS3 = async (file: File) => {
    const key = 'upload/' + v4() + file.name;
    const url = await uploadFile({ file, key }).then(({ Location }) => Location);
    return { key, url };
  };

  const deleteFile = async (key: string) => {
    s3.deleteObject({ Bucket: S3_BUCKET, Key: key }).send();
  };

  return { deleteFile, handleFileInput, getImageUrlFromS3 };
};

export default useImageUpload;
