import {
  DirectionsBoat,
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  Flight,
  PedalBike,
  Train,
} from '@mui/icons-material';

export const COMPLEX_BUTTON_IMAGE = [
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

export const IMAGE_TYPE = ['image/jpeg', 'image/png'];
export const IMAGE_EXTENSION = ['jpeg', 'jpg', 'png'];

export const S3_BUCKET = 'travel-zip-bucket';
export const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
export const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
export const REGION = 'ap-northeast-2';

export const NO_IMAGE_URL = '1234567890qwertyuiop';

export const TRANSPORT_TYPE = [
  { icon: Flight, type: 'PLANE' },
  { icon: DirectionsBoat, type: 'SHIP' },
  { icon: DirectionsBus, type: 'BUS' },
  { icon: Train, type: 'TRAIN' },
  { icon: DirectionsCar, type: 'CAR' },
  { icon: PedalBike, type: 'BICYCLE' },
  { icon: DirectionsRun, type: 'WALK' },
];

export const ACCESS_TOKEN = 'ACCESS_TOKEN';
