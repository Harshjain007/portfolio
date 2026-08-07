import { createContext } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const STORAGE_KEY = 'hj-theme';

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
