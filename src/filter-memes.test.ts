import { describe, it, expect } from 'vitest';
import { filterMemes } from './filter-memes';

describe('filterMemes', () => {
  it('возвращает все мемы, если запрос пустой', () => {
    const memes = [
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Ждун', categories: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: '', category: '' });

    expect(result).toEqual(memes);
  });

  it('находит мем по части названия', () => {
    const memes = [
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Ждун', categories: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: 'дун', category: '' });

    expect(result).toEqual([memes[1]]);
  });

  it('находит мем независимо от регистра', () => {
    const memes = [
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Ждун', categories: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: 'ждун', category: '' });

    expect(result).toEqual([memes[1]]);
  });

  it('фильтрует мемы по категории', () => {
    const memes = [
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Ждун', categories: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: '', category: 'добрые' });

    expect(result).toEqual([memes[1]]);
  });
});
