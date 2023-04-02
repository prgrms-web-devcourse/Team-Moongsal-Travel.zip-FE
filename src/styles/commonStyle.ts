export const horizontalCenterstyle = {
  display: 'flex',
  justifyContent: 'center',
};

export const flexCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const mobileModalLayoutStyle = {
  minWidth: 390,
  maxWidth: 414,
  transform: 'translateX(-50%)',
  left: '50%',
};

export const inputStyle = {
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'blue050.main',
    },
    fontWeight: '300',
  },
  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'blue050.main',
    },
    fontWeight: '300',
  },
};

export const fontStyle = {
  color: 'dark.main',
  fontSize: '16px',
  fontWeight: '500',
  pb: '2px',
};

export const stepStyle = {
  '.MuiStepIcon-text': {
    fontFamily: 'Pretendard-Regular',
  },
  '.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root': {
    '&.Mui-active, &.Mui-completed': {
      color: 'blue070.main',
    },
  },
};

export const swipeStyle = {
  '&.MuiDrawer-root > .MuiPaper-root': {
    boxSizing: 'border-box',
    minWidth: '390px',
    maxWidth: '414px',
    margin: 'auto',
    padding: '1rem 2rem',
    overflow: 'visible',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
} as const;
