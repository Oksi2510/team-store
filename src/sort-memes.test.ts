import { expect, describe, it } from 'vitest';
import { sortMemes } from './sort-memes';

describe('sortMemes', () => {
  it('сортирует мемы по названию по возрастанию', () => {
    const memes = [
      { title: 'Ждун', categories: ['добрые'] },
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Абсолют', categories: ['классика'] },
    ];

    const result = sortMemes(memes, 'title-asc');

    expect(result.map((meme) => meme.title)).toEqual(['Абсолют', 'Ждун', 'Пепе']);
  });

  it('не меняет порядок исходного массива', () => {
    const memes = [
      { title: 'Ждун', categories: ['добрые'] },
      { title: 'Пепе', categories: ['классика'] },
      { title: 'Абсолют', categories: ['классика'] },
    ];

    const orderBefore = memes.map((meme) => meme.title);

    sortMemes(memes, 'title-asc');

    expect(memes.map((meme) => meme.title)).toEqual(orderBefore);
  });
});
