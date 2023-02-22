import { createTheme, SimplePaletteColorOptions } from '@mui/material';

declare module '@mui/material' {
  interface Palette extends PaletteOverrides<typeof palette, SimplePaletteColorOptions> {}
  interface PaletteOptions
    extends PaletteOverrides<typeof palette, SimplePaletteColorOptions> {}
  interface ButtonPropsColorOverrides extends PaletteOverrides<typeof palette, true> {}
  interface SwitchPropsColorOverrides extends PaletteOverrides<typeof palette, true> {}
  interface SliderPropsColorOverrides extends PaletteOverrides<typeof palette, true> {}
  interface CheckboxPropsColorOverrides extends PaletteOverrides<typeof palette, true> {}
  interface AppBarPropsColorOverrides extends PaletteOverrides<typeof palette, true> {}
}

type PaletteOverrides<T extends object, X> = { [key in keyof T]: X };

const palette = {
  blue010: { main: '#E3EDF7' },
  blue040: { main: '#66B2F5' },
  blue050: { main: '#0080FF' },
  blue070: { main: '#4982F8' },
  dark: { main: '#333333' },
  black: { main: '#000000' },
  gray005: { main: '#F3F3F3' },
  gray010: { main: '#E5E5E5' },
  gray020: { main: '#CFCFCF' },
  gray030: { main: '#959595' },
  red: { main: '#F25252' },
  white: { main: '#ffffff' },
} as const;

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: 'KOHINanumOTFL',
  },
});
