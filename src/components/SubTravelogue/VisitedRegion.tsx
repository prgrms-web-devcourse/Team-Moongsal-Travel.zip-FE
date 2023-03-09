import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { Control, Controller, useFieldArray } from 'react-hook-form';

import { SubTitle } from '@/components/common';
import { SubTravelogueType } from '@/types/post';

import { Location } from '.';

interface VisitedRegionProps {
  control: Control<SubTravelogueType>;
  saved: boolean;
}

const VisitedRegion = ({ control, saved }: VisitedRegionProps) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });

  return (
    <Stack sx={{ mb: '1rem' }} component='ul'>
      <Stack direction='row' alignItems='center'>
        <SubTitle>방문한 장소</SubTitle>
        <IconButton
          color='primary'
          component='label'
          onClick={() => append({ region: '' })}>
          <AddCircleIcon />
        </IconButton>
      </Stack>
      {fields.map((item, index) => (
        <Stack key={item.id} direction='row' spacing={2} component='li'>
          <Controller
            render={({ field }) => <Location field={field} disabled={saved} />}
            name={`addresses.${index}.region`}
            control={control}
            rules={{ required: true }}
          />
          <Button
            type='button'
            variant='outlined'
            sx={{ width: '60px', height: '56px' }}
            onClick={() => remove(index)}
            disabled={fields.length === 1}>
            삭제
          </Button>
        </Stack>
      ))}
    </Stack>
  );
};

export default VisitedRegion;