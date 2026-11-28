export function toggleFavorite(favoriteIds: number[], id: number): number[] {
  if (favoriteIds.includes(id)) {
    return favoriteIds.filter((currentId) => currentId !== id);
  }
  return [...favoriteIds, id];
}

export const FAVORITES_KEY = 'favorites';

interface FavoritesStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function loadFavorites(storage: FavoritesStorage): number[] {
  const stored = storage.getItem(FAVORITES_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(stored);

    return Array.isArray(parsed) ? (parsed as number[]) : [];
  } catch {
    return [];
  }
}

export function saveFavorites(storage: FavoritesStorage, ids: number[]): void {
  storage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}
