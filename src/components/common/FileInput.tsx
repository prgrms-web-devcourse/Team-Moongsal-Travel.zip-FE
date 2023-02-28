import { PhotoCamera } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { CreatePost } from '@/api/createPost/type';

import { SubTitle } from './';

interface FileInputProps {
  thumbnail: ControllerRenderProps<CreatePost, 'thumbnail'>;
}

const FileInput = ({ thumbnail }: FileInputProps) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <>
      <input
        {...thumbnail}
        accept='image/*'
        type='file'
        id='select-image'
        style={{ display: 'none' }}
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
          }
        }}
      />
      <label htmlFor='select-image'>
        <IconButton aria-label='delete' component='span'>
          <PhotoCamera />
          <SubTitle>Upload Image</SubTitle>
        </IconButton>
      </label>
      {imageUrl && selectedImage && (
        <Box
          mt={2}
          textAlign='center'
          sx={{ position: 'relative', height: '100px', minWidth: '200px' }}>
          <Image
            fill
            src={imageUrl}
            alt={selectedImage.name}
            style={{ objectFit: 'contain' }}
          />
        </Box>
      )}
    </>
  );
};

export default FileInput;
