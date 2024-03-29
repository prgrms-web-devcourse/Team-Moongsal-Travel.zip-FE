import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import { Button, IconButton, Stack } from '@mui/material';
import { Control, Controller, useFieldArray } from 'react-hook-form';

import { AutoComplete } from '@/components/common/AutoComplete';
import { SubTitle } from '@/components/common/Title';
import { SubTravelogueType } from '@/types/travelogue';

import { Location } from '.';

interface VisitedRegionProps {
  control: Control<SubTravelogueType>;
}

const VisitedRegion = ({ control }: VisitedRegionProps) => {
  const { fields, append, remove } = useFieldArray({ control, name: 'addresses' });

  return (
    <Stack sx={{ mb: '1rem', p: ' 0' }} component='ul'>
      <Stack direction='row' alignItems='center'>
        <SubTitle>방문한 장소</SubTitle>
        <IconButton
          color='primary'
          component='label'
          onClick={() => append({ region: '' })}
          sx={{ color: 'blue050.main' }}>
          <AddCircleIcon />
        </IconButton>
      </Stack>
      <Stack sx={{ gap: '0.5rem' }}>
        {fields.map((item, index) => (
          <Stack
            key={item.id}
            direction='row'
            spacing={2}
            component='li'
            justifyContent={'space-between'}
            alignItems='center'>
            <Controller
              render={({ field }) => (
                <AutoComplete>
                  <Location field={field} />
                </AutoComplete>
              )}
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
    </Stack>
  );
};

export default VisitedRegion;
