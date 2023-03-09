import {
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  Flight,
  PedalBike,
  Sailing,
  Train,
} from '@mui/icons-material';
import { Stack, SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SubTitle } from '@/components/common';

const transportType = [
  { icon: Flight, type: 'PLANE' },
  { icon: Sailing, type: 'SHIP' },
  { icon: DirectionsBus, type: 'BUS' },
  { icon: Train, type: 'TRAIN' },
  { icon: DirectionsCar, type: 'CAR' },
  { icon: PedalBike, type: 'BICYCLE' },
  { icon: DirectionsRun, type: 'WALK' },
];

interface TransportationProps {
  value: string[];
  disabled: boolean;
  onTransportSelect: (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => void;
}

const Transportation = ({ value, disabled, onTransportSelect }: TransportationProps) => {
  return (
    <Stack sx={{ mb: '1rem' }}>
      <SubTitle>이동수단</SubTitle>
      <ToggleButtonGroup
        value={value}
        onChange={onTransportSelect}
        disabled={disabled}
        aria-label='text formatting'>
        {transportType.map((transport, i) => (
          <ToggleIconButton key={transport.type} value={transport.type}>
            <SvgIcon component={transportType[i].icon} />
          </ToggleIconButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};

export default Transportation;

const ToggleIconButton = styled(ToggleButton)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.blue050.main,
  },
}));
