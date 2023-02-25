import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FlightIcon from '@mui/icons-material/Flight';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import SailingIcon from '@mui/icons-material/Sailing';
import TrainIcon from '@mui/icons-material/Train';
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
        <FlightIcon />
      </ToggleIconButton>
      <ToggleIconButton value='boat' aria-label='boat'>
        <SailingIcon />
      </ToggleIconButton>
      <ToggleIconButton value='bus' aria-label='bus'>
        <DirectionsBusIcon />
      </ToggleIconButton>
      <ToggleIconButton value='train' aria-label='train'>
        <TrainIcon />
      </ToggleIconButton>
      <ToggleIconButton value='car' aria-label='car'>
        <DirectionsCarIcon />
      </ToggleIconButton>
      <ToggleIconButton value='bicycle' aria-label='bicycle'>
        <PedalBikeIcon />
      </ToggleIconButton>
      <ToggleIconButton value='walk' aria-label='walk'>
        <DirectionsRunIcon />
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
