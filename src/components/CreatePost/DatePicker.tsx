import TextField from '@mui/material/TextField';
import { koKR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { ControllerRenderProps } from 'react-hook-form';

import { CreatePost } from '@/api/createPost/type';

interface DatePickerProps {
  text?: string;
  control:
    | ControllerRenderProps<CreatePost, 'period.startDate'>
    | ControllerRenderProps<CreatePost, 'period.endDate'>;
}

const DatePicker = ({ text, control }: DatePickerProps) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ko'
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <MobileDatePicker
        {...control}
        inputFormat='YYYY년 MM월 DD일'
        label={text}
        value={new Date()}
        toolbarFormat='YYYY년 MM월 DD일'
        disableMaskedInput
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
