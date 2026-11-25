import { expect, describe, it } from 'vitest';
import { toggleFavorite } from './favorites';

describe('toggleFavorite', () => {
  it('добавляет id в пустой список', () => {
    const result = toggleFavorite([], 5);

    expect(result).toEqual([5]);
  });

  it('убирает id, если он уже есть', () => {
    const result = toggleFavorite([3, 5, 7], 5);

    expect(result).toEqual([3, 7]);
  });
});
