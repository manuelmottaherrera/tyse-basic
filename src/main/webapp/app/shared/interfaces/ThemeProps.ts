import { Theme } from '../types/theme';

export interface IThemeProps {
  theme: Theme;
  onTheme: (value: Theme) => void;
}
