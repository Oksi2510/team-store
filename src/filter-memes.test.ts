import { describe, it, expect } from 'vitest';
import { filterMemes } from './filter-memes';

describe('filterMemes', () => {
  it('возвращает все мемы, если запрос пустой', () => {
    const memes = [
      { title: 'Пепе', tags: ['классика'] },
      { title: 'Ждун', tags: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: '', tag: '' });

    expect(result).toEqual(memes);
  });

  it('находит мем по части названия', () => {
    const memes = [
      { title: 'Пепе', tags: ['классика'] },
      { title: 'Ждун', tags: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: 'дун', tag: '' });

    expect(result).toEqual([memes[1]]);
  });

  it('находит мем независимо от регистра', () => {
    const memes = [
      { title: 'Пепе', tags: ['классика'] },
      { title: 'Ждун', tags: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: 'ждун', tag: '' });

    expect(result).toEqual([memes[1]]);
  });

  it('фильтрует мемы по тегу', () => {
    const memes = [
      { title: 'Пепе', tags: ['классика'] },
      { title: 'Ждун', tags: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: '', tag: 'добрые' });

    expect(result).toEqual([memes[1]]);
  });

  it('возвращает пустой массив, если ничего не найдено', () => {
    const memes = [
      { title: 'Пепе', tags: ['классика'] },
      { title: 'Ждун', tags: ['добрые'] },
    ];

    const result = filterMemes(memes, { query: 'сладкийбубалех', tag: 'почтисладкийбубалех' });

    expect(result).toEqual([]);
  });

  it('возвращает пустой массив для пустого списка мемов', () => {
    const result = filterMemes([], { query: '', tag: 'животные' });

    expect(result).toEqual([]);
  });
});
