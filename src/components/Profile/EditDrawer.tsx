import { Dialog, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef, ReactElement, Ref } from 'react';

import { EditForm, MobileAppBarLayout } from '@/components/Profile';
import { mobileModalLayoutStyle } from '@/styles/commonStyle';
import { UserInformationPatchType } from '@/types/profile';

type EditDrawerProps = {
  isOpen: boolean;
  isLoading: boolean;
  handleClose: () => void;
} & UserInformationPatchType;

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const EditDrawer = ({
  isOpen,
  handleClose,
  profileImageUrl,
  nickname,
  isLoading,
}: EditDrawerProps) => {
  return (
    <MobileSizeDrawer
      open={isOpen}
      fullScreen
      onClose={handleClose}
      TransitionComponent={Transition}>
      <MobileAppBarLayout handleClose={handleClose} />
      <EditForm
        profileImageUrl={profileImageUrl}
        isLoading={isLoading}
        nickname={nickname}
      />
    </MobileSizeDrawer>
  );
};

export default EditDrawer;

const MobileSizeDrawer = styled(Dialog)(() => ({
  ...mobileModalLayoutStyle,
}));
