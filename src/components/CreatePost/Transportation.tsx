import {
  DirectionsBus,
  DirectionsCar,
  DirectionsRun,
  Flight,
  PedalBike,
  Sailing,
  Train,
} from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TransportationProps {
  value: string[];
  handleFormat: (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => void;
}

const Transportation = ({ value, handleFormat }: TransportationProps) => {
  return (
    <ToggleButtonGroup value={value} onChange={handleFormat} aria-label='text formatting'>
      <ToggleIconButton value='flight' aria-label='flight'>
        <Flight />
      </ToggleIconButton>
      <ToggleIconButton value='boat' aria-label='boat'>
        <Sailing />
      </ToggleIconButton>
      <ToggleIconButton value='bus' aria-label='bus'>
        <DirectionsBus />
      </ToggleIconButton>
      <ToggleIconButton value='train' aria-label='train'>
        <Train />
      </ToggleIconButton>
      <ToggleIconButton value='car' aria-label='car'>
        <DirectionsCar />
      </ToggleIconButton>
      <ToggleIconButton value='bicycle' aria-label='bicycle'>
        <PedalBike />
      </ToggleIconButton>
      <ToggleIconButton value='walk' aria-label='walk'>
        <DirectionsRun />
      </ToggleIconButton>
    </ToggleButtonGroup>
  );
};

export default Transportation;

const ToggleIconButton = styled(ToggleButton)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.blue050.main,
  },
}));
