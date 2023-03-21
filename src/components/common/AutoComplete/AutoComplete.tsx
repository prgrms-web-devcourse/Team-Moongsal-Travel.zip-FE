import { useLoadScript } from '@react-google-maps/api';
import { ReactNode } from 'react';

import Spinner from '@/components/common/Spinner';

const libraries: (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[] = ['places'];

interface AutoCompleteProps {
  children: ReactNode;
}

const AutoComplete = ({ children }: AutoCompleteProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY as string,
    libraries,
  });

  if (!isLoaded) return <Spinner isLoading={isLoaded} />;
  return <>{children}</>;
};

export default AutoComplete;
