import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Title } from '@/components/common/Title';
import { fontStyle } from '@/styles/commonStyle';

interface EmptyDataProps {
  title: string;
  src: string;
  text: string;
  button?: string;
  link?: string;
}

const EmptyData = ({ title, src, text, button, link }: EmptyDataProps) => {
  const router = useRouter();

  return (
    <Stack component='section' sx={{ p: '1rem 0' }}>
      <Title bold='bold' fontSize='1.4rem' color='dark.main' sx={{ ml: '15px' }}>
        {title}
      </Title>
      <Stack sx={{ width: '100%', my: 1 }} alignItems='center'>
        <Image src={src} alt='' width={250} />
        <Typography component='p' sx={{ ...fontStyle, mt: '5px' }}>
          {text}
        </Typography>
        {button && link && (
          <Button
            variant='contained'
            sx={{
              mt: '5px',
              backgroundColor: 'blue040.main',
              borderRadius: '20px',
              fontWeight: '400',
            }}
            onClick={() => router.push(link)}>
            {button}
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default EmptyData;
