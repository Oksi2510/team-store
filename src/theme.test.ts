import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './theme';

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

  it('игнорирует неизсветное значение в хранилище', () => {
    const result = getInitialTheme('blue', true);

    expect(result).toBe('dark');
  });
});
