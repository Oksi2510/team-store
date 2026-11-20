import { describe, it, expect } from 'vitest';
import { filterMemes } from './filter-memes';

describe('filterMemes', () => {
  it('возвращает все мемы, если запрос пустой', () => {
    const memes = [{ title: 'Пепе' }, { title: 'Ждун' }];

    const result = filterMemes(memes, '');

    expect(result).toEqual(memes);
  });

  it('находит мем по части названия', () => {
    const memes = [{ title: 'Пепе' }, { title: 'Ждун' }];

    const result = filterMemes(memes, 'дун');

    expect(result).toEqual([{ title: 'Ждун' }]);
  });
});
