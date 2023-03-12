import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement } from 'react';

const Transition = forwardRef(
  (
    props: TransitionProps & { children: ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) => {
    return <Slide direction='up' ref={ref} {...props} />;
  },
);

Transition.displayName = 'Transition';

export default Transition;
