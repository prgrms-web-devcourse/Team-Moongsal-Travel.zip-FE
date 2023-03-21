import { PhotoCamera } from '@mui/icons-material';
import { Alert, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import { SubTitle } from '@/components/common/Title';
import useImageUpload from '@/hooks/common/useImageUpload';
import { TravelogueFormType } from '@/types/travelogue';

interface FileInputProps {
  thumbnail: ControllerRenderProps<TravelogueFormType, 'thumbnail'>;
  imageUrl?: string;
}

const FileInput = ({ thumbnail, imageUrl }: FileInputProps) => {
  const { handleFileInput } = useImageUpload();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isInvalidType, setIsInvalidType] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!handleFileInput(e)) {
      setIsInvalidType(true);
      setSelectedImage(null);
      return;
    }
    setIsInvalidType(false);
    setSelectedImage(e.target.files && e.target.files[0]);
    thumbnail.onChange(e.target.files && e.target.files[0]);
  };

  return (
    <>
      <input
        accept='image/*'
        type='file'
        id='select-image'
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label htmlFor='select-image'>
        <IconButton
          aria-label='delete'
          component='span'
          disableRipple
          sx={{ ...iconButtonStyle, p: 0 }}>
          <PhotoCamera sx={{ pr: 1 }} />
          <SubTitle fontSize='17px'>Upload Image</SubTitle>
        </IconButton>
      </label>
      {selectedImage ? (
        <Box
          mt={1}
          textAlign='center'
          sx={{ position: 'relative', height: '150px', minWidth: '300px' }}>
          <Image
            fill
            src={URL.createObjectURL(selectedImage)}
            alt='thumbnail'
            style={{ objectFit: 'contain' }}
          />
        </Box>
      ) : isInvalidType ? (
        <Alert severity='error'>jpeg/png 파일만 Upload 가능합니다.</Alert>
      ) : (
        imageUrl && (
          <Box
            mt={2}
            textAlign='center'
            sx={{ position: 'relative', height: '100px', minWidth: '200px' }}>
            <Image fill src={imageUrl} alt='thumbnail' style={{ objectFit: 'contain' }} />
          </Box>
        )
      )}
    </>
  );
};

export default FileInput;

const iconButtonStyle = {
  '&:hover': {
    color: 'blue070.main',
  },
};
