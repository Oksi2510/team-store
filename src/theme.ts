export type Theme = 'light' | 'dark';

export function getInitialTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === null) {
    return prefersDark ? 'dark' : 'light';
  }

  return 'light';
}
