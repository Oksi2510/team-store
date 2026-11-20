export type Theme = 'light' | 'dark';

export function getInitialTheme(stored: string | null, prefersDark: boolean): Theme {
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return prefersDark ? 'dark' : 'light';
}

export function toggleTheme(theme: Theme): Theme {
  if (theme === 'light') {
    return 'dark';
  }
  return 'light';
}

export function applyTheme(theme: Theme, root: HTMLElement = document.documentElement): void {
  root.dataset.theme = theme;
}
