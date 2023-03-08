import {
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  Flight,
  PedalBike,
  Sailing,
  Train,
} from '@mui/icons-material';
import { SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  handleFormat: (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => void;
}

const Transportation = ({ value, handleFormat }: TransportationProps) => {
  return (
    <ToggleButtonGroup value={value} onChange={handleFormat} aria-label='text formatting'>
      {transportType.map((transport, i) => (
        <ToggleIconButton key={transport.type} value={transport.type}>
          <SvgIcon component={transportType[i].icon} />
        </ToggleIconButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default Transportation;

const ToggleIconButton = styled(ToggleButton)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.blue050.main,
  },
}));