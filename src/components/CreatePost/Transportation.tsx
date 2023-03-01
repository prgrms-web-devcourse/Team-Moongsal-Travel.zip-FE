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
import { Control, Controller, useFieldArray } from 'react-hook-form';

import { SubTravelogueForm } from '@/types/post';

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
  control: Control<SubTravelogueForm>;
}

const Transportation = ({ value, handleFormat, control }: TransportationProps) => {
  const { fields } = useFieldArray({ control, name: 'transports' });

  return (
    <ToggleButtonGroup value={value} onChange={handleFormat}>
      {fields.map((item, i) => (
        <Controller
          key={item.id}
          render={({ field }) => (
            <ToggleIconButton
              {...field}
              onChange={() => field.onChange(field.value ? '' : transportType[i].type)}>
              <SvgIcon component={transportType[i].icon} />
            </ToggleIconButton>
          )}
          name={`transports.${i}.transport`}
          control={control}
        />
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
