import { describe, it, expect } from 'vitest';
import { getInitialTheme } from './theme';

describe('getInitialTheme', () => {
  it('возвращает light, если сохранённой темы нет и система светлая', () => {
    const result = getInitialTheme(null, false);

    expect(result).toBe('light');
  });
});
