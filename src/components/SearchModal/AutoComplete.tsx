import { useLoadScript } from '@react-google-maps/api';

import { PlacesAutocomplete } from './';

const AutoComplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY as string,
    libraries: ['places'],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <PlacesAutocomplete />;
};

export default AutoComplete;
