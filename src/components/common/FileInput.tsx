import { PhotoCamera } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import useImageUpload from '@/hooks/useImageUpload';
import { TravelogueFormType } from '@/types/post';

import { SubTitle } from './';

interface FileInputProps {
  thumbnail: ControllerRenderProps<TravelogueFormType, 'thumbnail'>;
  imageUrl?: string;
}

const FileInput = ({ thumbnail, imageUrl }: FileInputProps) => {
  const { handleFileInput } = useImageUpload();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <>
      <input
        accept='image/*'
        type='file'
        id='select-image'
        style={{ display: 'none' }}
        onChange={(e) => {
          handleFileInput(e);
          setSelectedImage(e.target.files && e.target.files[0]);
          thumbnail.onChange(e.target.files && e.target.files[0]);
        }}
      />
      <label htmlFor='select-image'>
        <StyledIconButton aria-label='delete' disableRipple sx={iconStyle}>
          <PhotoCamera sx={{ mr: '10px' }} />
          <SubTitle fontSize='16px'>Upload Image</SubTitle>
        </StyledIconButton>
      </label>
      {selectedImage ? (
        <Box
          mt={2}
          textAlign='center'
          sx={{ position: 'relative', height: '100px', minWidth: '200px' }}>
          <Image
            fill
            src={URL.createObjectURL(selectedImage)}
            alt='thumbnail'
            style={{ objectFit: 'contain' }}
          />
        </Box>
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

const iconStyle = {
  '&:hover': {
    color: '#',
  },
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.blue070.main,
  },
}));
