import { describe, it, expect } from 'vitest';
import { filterMemes } from './filter-memes';

describe('filterMemes', () => {
  it('возвращает все мемы если запрос пустой', () => {
    const memes = [{ title: 'Пепе' }, { title: 'Ждун' }];

    const result = filterMemes(memes, '');

    expect(result).toEqual(memes);
  });
});
