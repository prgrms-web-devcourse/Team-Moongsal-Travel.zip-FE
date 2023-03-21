import { Stack, SvgIcon, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SubTitle } from '@/components/common/Title';
import { TRANSPORT_TYPE } from '@/constants';

interface TransportationProps {
  value: string[];
  onTransportSelect: (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => void;
}

const Transportation = ({ value, onTransportSelect }: TransportationProps) => {
  return (
    <Stack sx={{ mb: '1rem' }}>
      <SubTitle>이동수단</SubTitle>
      <ToggleButtonGroup
        value={value}
        onChange={onTransportSelect}
        aria-label='text formatting'>
        {TRANSPORT_TYPE.map(({ icon, type }, i) => (
          <ToggleIconButton key={i} value={type} sx={{ width: '47.5px' }}>
            <SvgIcon component={icon} />
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
