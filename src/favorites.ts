export function toggleFavorite(favoriteIds: number[], id: number): number[] {
  if (favoriteIds.includes(id)) {
    return favoriteIds.filter((currentId) => currentId !== id);
  }
  return [...favoriteIds, id];
}
