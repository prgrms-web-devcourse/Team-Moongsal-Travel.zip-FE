import TextField from '@mui/material/TextField';
import { koKR } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { ControllerRenderProps } from 'react-hook-form';

import { TravelogueType } from '@/types/travelogue';
import { getDateInfo } from '@/utils/helper';

interface DatePickerProps {
  text?: string;
  control:
    | ControllerRenderProps<TravelogueType, 'period.startDate'>
    | ControllerRenderProps<TravelogueType, 'period.endDate'>;
  maxDate?: Dayjs;
  isEditPage: boolean;
}

const DatePicker = ({ text, control, maxDate, isEditPage }: DatePickerProps) => {
  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) control.onChange(getDateInfo(newValue));
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale='ko'
      localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}>
      <MobileDatePicker
        {...control}
        value={control.value}
        inputFormat='YYYY년 MM월 DD일'
        showToolbar={false}
        label={text}
        onChange={handleDateChange}
        disableFuture
        disabled={isEditPage}
        maxDate={maxDate}
        onError={(reason) => {
          control.name === 'period.startDate' &&
            reason === 'maxDate' &&
            control.onChange(null);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
