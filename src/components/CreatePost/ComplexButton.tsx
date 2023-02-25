import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MouseEvent, useState } from 'react';

const images = [
  {
    url: '/images/buttons/domestic.svg',
    title: '국내',
    width: '40%',
  },
  {
    url: '/images/buttons/foreign.svg',
    title: '해외',
    width: '40%',
  },
];

const ComplexButton = () => {
  const [toggle, setToggle] = useState('');

  const handleChange = (e: MouseEvent<HTMLElement>, selectedValue: string) => {
    setToggle(selectedValue);
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={toggle}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      {images.map((image) => (
        <ImageButton
          key={image.url}
          value={image.title}
          id='toggle-button'
          style={{
            width: image.width,
            height: '100px',
          }}>
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className='MuiImageBackdrop-root' />
          <ImageItem>
            <Typography
              component='span'
              variant='subtitle1'
              color='inherit'
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}>
              {image.title}
              <ImageMarked className='MuiImageMarked-root' />
            </Typography>
          </ImageItem>
        </ImageButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ComplexButton;

const ImageButton = styled(ToggleButton)(({ theme }) => ({
  position: 'relative',
  height: 200,
  borderRadius: '20px',
  [theme.breakpoints.down('sm')]: {
    height: 100,
  },
  '&#toggle-button': {
    borderRadius: '20px',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      borderRadius: '20px',
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
  '&.Mui-selected': {
    backgroundColor: '#ffffff',
    '& .MuiImageBackdrop-root': {
      borderRadius: '20px',
      opacity: 0.1,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius: '20px',
});

const ImageItem = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.white.main,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.black.main,
  opacity: 0.4,
  transition: 'opacity 500ms',
  borderRadius: '20px',
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.white.main,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: 'opacity 500ms',
}));
