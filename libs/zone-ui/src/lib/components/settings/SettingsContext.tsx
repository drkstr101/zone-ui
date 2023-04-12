/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
// hooks
import useLocalStorage from '../../hooks/useLocalStorage';
//
import { defaultSettings } from './config-setting';
import { defaultPreset, getPresets, presetsOption } from './presets';
import { SettingsContextProps } from './types';

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  onToggleMode: () => void 0,
  // Direction
  onToggleDirection: () => void 0,
  // Color
  onChangeColorPresets: () => void 0,
  presetsColor: defaultPreset,
  presetsOption: [],
  // Reset
  onResetSetting: () => void 0,
  // Open
  open: false,
  onToggle: () => void 0,
  onOpen: () => void 0,
  onClose: () => void 0,
  // Not default
  notDefault: false,
};

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
};

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [open, setOpen] = useState(false);

  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  // Mode
  const onToggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light';
    setSettings({ ...settings, themeMode });
  }, [setSettings, settings]);

  // Direction
  const onToggleDirection = useCallback(() => {
    const themeDirection = settings.themeDirection === 'rtl' ? 'ltr' : 'rtl';
    setSettings({ ...settings, themeDirection });
  }, [setSettings, settings]);

  // Color
  const onChangeColorPresets = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const themeColorPresets = event.target.value;
      setSettings({ ...settings, themeColorPresets });
    },
    [setSettings, settings]
  );

  // Reset
  const onResetSetting = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings]);

  const onToggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const notDefault =
    settings.themeMode !== defaultSettings.themeMode ||
    settings.themeDirection !== defaultSettings.themeDirection ||
    settings.themeColorPresets !== defaultSettings.themeColorPresets;

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      // Mode
      onToggleMode,
      // Direction
      onToggleDirection,
      // Color
      onChangeColorPresets,
      presetsOption,
      presetsColor: getPresets(settings.themeColorPresets),
      // Reset
      onResetSetting,
      // Open
      open,
      onToggle,
      onOpen,
      onClose,
      // Not default
      notDefault,
    }),
    [
      settings,
      // Mode
      onToggleMode,
      // Color
      onChangeColorPresets,
      // Direction
      onToggleDirection,
      // Reset
      onResetSetting,
      // Open
      open,
      onToggle,
      onOpen,
      onClose,
      // Not default
      notDefault,
    ]
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
