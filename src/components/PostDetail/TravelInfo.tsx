import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  SvgIcon,
  SvgIconProps,
} from '@mui/material';
import { ElementType } from 'react';

import { TravelInfoTitle } from '@/types/travelogue';

interface TravelInfoProps {
  title: TravelInfoTitle;
  value: string | ElementType<SvgIconProps>[];
  icon: ElementType<SvgIconProps>;
}

const TravelInfo = ({ title, value, icon }: TravelInfoProps) => {
  return (
    <>
      <ListItem sx={{ pl: '0' }}>
        <ListItemAvatar>
          <Avatar>
            <SvgIcon component={icon} />
          </Avatar>
        </ListItemAvatar>
        {title !== '이동수단' ? (
          <ListItemText primary={title} secondary={value as string} />
        ) : (
          Array.isArray(value) && (
            <Stack>
              <ListItemText primary={title} />
              <Stack direction='row'>
                {value.map((icon, i) => (
                  <SvgIcon key={i} component={icon} sx={{ color: '#bdbdbd' }} />
                ))}
              </Stack>
            </Stack>
          )
        )}
      </ListItem>
      <Divider variant='inset' component='li' sx={{ ml: '55px' }} />
    </>
  );
};

export default TravelInfo;
