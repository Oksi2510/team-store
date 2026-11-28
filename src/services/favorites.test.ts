import { expect, describe, it } from 'vitest';
import { toggleFavorite, getFavoritesKey } from './favorites';

describe('toggleFavorite', () => {
  it('добавляет id в пустой список', () => {
    const result = toggleFavorite([], 5);

    expect(result).toEqual([5]);
  });

  it('убирает id, если он уже есть', () => {
    const result = toggleFavorite([3, 5, 7], 5);

    expect(result).toEqual([3, 7]);
  });

  it('возвращает пустой массив, когда убрали единственный id', () => {
    const result = toggleFavorite([5], 5);

    expect(result).toEqual([]);
  });

  it('не меняет исходный массив', () => {
    const favorites = [3, 5, 7];
    toggleFavorite(favorites, 5);
    expect(favorites).toEqual([3, 5, 7]);
  });
});

describe('getFavoritesKey', () => {
  it('собирает ключ из имени пользователя', () => {
    expect(getFavoritesKey('Ким')).toBe('favorites:Ким');
  });

  it('обрезает пробелы по краям имени', () => {
    expect(getFavoritesKey('  Ким  ')).toBe('favorites:Ким');
  });
});
