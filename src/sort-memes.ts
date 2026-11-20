import type { FilterableMeme } from './filter-memes';

export type SortOrder = 'title-asc' | 'title-desc';

export function sortMemes(memes: FilterableMeme[], order: SortOrder): FilterableMeme[] {
  const direction = order === 'title-asc' ? 1 : -1;
  return [...memes].sort((a, b) => direction * a.title.localeCompare(b.title, 'ru'));
}
