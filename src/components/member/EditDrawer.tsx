import { Dialog, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref } from 'react';

import { EditForm, MobileAppBarLayout } from '@/components/member';
import { mobileModalLayoutStyle } from '@/styles/commonStyle';

type EditDrawerProps = {
  isOpen: boolean;
  handleCloseEditModal: () => void;
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const EditDrawer = ({ isOpen, handleCloseEditModal }: EditDrawerProps) => {
  return (
    <MobileSizeDrawer
      disableScrollLock
      open={isOpen}
      fullScreen
      onClose={handleCloseEditModal}
      TransitionComponent={Transition}>
      <MobileAppBarLayout handleClose={handleCloseEditModal} />
      <EditForm />
    </MobileSizeDrawer>
  );
};

export default EditDrawer;

const MobileSizeDrawer = styled(Dialog)(() => ({
  ...mobileModalLayoutStyle,
}));
