import { List } from '@mui/material';
import Image from 'next/image';
import { scrapBg } from 'public/images';
import { ReactNode } from 'react';

import { Title } from '@/components/common/Title';
import { scrapImageStyle, scrapListStyle } from '@/styles/commonStyle';

interface ScrapListProps {
  children: ReactNode;
  scrapTitle?: string;
}

const ScrapList = ({ children, scrapTitle }: ScrapListProps) => {
  return (
    <List sx={scrapListStyle}>
      <Image src={scrapBg} alt={scrapBg} style={scrapImageStyle} />
      <Title fontSize='1.5rem' bold='900' color='blue040.main' sx={{ mb: 2 }}>
        {scrapTitle}
      </Title>
      {children}
    </List>
  );
};

export default ScrapList;
