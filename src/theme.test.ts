import { describe, it, expect } from 'vitest';
import { applyTheme, getInitialTheme, toggleTheme } from './theme';

describe('getInitialTheme', () => {
  it('возвращает light, если сохранённой темы нет и система светлая', () => {
    const result = getInitialTheme(null, false);

    expect(result).toBe('light');
  });

  it('возвращает dark, если сохранённой темы нет и система тёмная', () => {
    const result = getInitialTheme(null, true);

    expect(result).toBe('dark');
  });

  it('использует сохранённую тему, даже если системная другая', () => {
    const result = getInitialTheme('dark', false);

    expect(result).toBe('dark');
  });

  it('игнорирует неизвестное значение в хранилище', () => {
    const result = getInitialTheme('blue', true);

    expect(result).toBe('dark');
  });
});

describe('toggleTheme', () => {
  it('переключает светлую тему на тёмную', () => {
    const result = toggleTheme('light');

    expect(result).toBe('dark');
  });

  it('переключает тёмную тему на светлую', () => {
    const result = toggleTheme('dark');

    expect(result).toBe('light');
  });
});

describe('applyTheme', () => {
  it('ставит выбранную тему в data-theme', () => {
    const root = document.createElement('div');

    applyTheme('dark', root);

    expect(root.dataset.theme).toBe('dark');
  });

  it('перезаписывает тему при повторном вызове', () => {
    const root = document.createElement('div');

    applyTheme('dark', root);
    applyTheme('light', root);

    expect(root.dataset.theme).toBe('light');
  });
});
