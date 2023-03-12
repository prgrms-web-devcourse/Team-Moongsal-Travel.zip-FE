import { useRecoilState } from 'recoil';

import { isAuthConfirmModalState, isSigninState } from '@/recoil';

const useAuth = () => {
  const [isSignin, setIsSignin] = useRecoilState(isSigninState);
  const [isAuthConfirmModal, setIsAuthConfirmModal] = useRecoilState(
    isAuthConfirmModalState,
  );

  const handleOpenAuthConfirmModal = () => {
    if (!isSignin) {
      setIsAuthConfirmModal(true);
      return true;
    }

    return false;
  };

  return {
    setIsSignin,
    isAuthConfirmModal,
    setIsAuthConfirmModal,
    handleOpenAuthConfirmModal,
  } as const;
};

export default useAuth;
