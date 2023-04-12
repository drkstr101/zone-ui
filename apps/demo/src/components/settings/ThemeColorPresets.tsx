import merge from 'lodash.merge';
import { useMemo } from 'react';
// @mui
import {
  alpha,
  ThemeProvider,
  createTheme,
  useTheme,
} from '@mui/material/styles';
//
import { useSettingsContext } from './SettingsContext';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeColorPresets({ children }: Props) {
  const outerTheme = useTheme();

  const { presetsColor } = useSettingsContext();

  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: presetsColor.primary,
        secondary: presetsColor.secondary,
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha(presetsColor.primary.main, 0.24)}`,
        secondary: `0 8px 16px 0 ${alpha(presetsColor.secondary.main, 0.24)}`,
      },
    }),
    [presetsColor]
  );

  const theme = createTheme(merge(outerTheme, themeOptions));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
