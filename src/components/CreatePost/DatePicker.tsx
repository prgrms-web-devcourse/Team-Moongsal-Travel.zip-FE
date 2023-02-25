import TextField from '@mui/material/TextField';
import { koKR } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Dayjs } from 'dayjs';

interface DatePickerProps {
  text?: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
}

const DatePicker = ({ value, text, onChange }: DatePickerProps) => {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ko'
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <MobileDatePicker
        inputFormat='YYYY년 M월 D일'
        label={text}
        value={value}
        toolbarFormat='YYYY년 M월 D일'
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;