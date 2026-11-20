import type { FilterableMeme } from './filter-memes';

export type SortOrder = 'title-asc' | 'title-desc';

export function sortMemes(memes: FilterableMeme[], order: SortOrder): FilterableMeme[] {
  if (order === 'title-asc') {
    return [...memes].sort((a, b) => a.title.localeCompare(b.title, 'ru'));
  }
  if (order === 'title-desc') {
    return [...memes].sort((a, b) => b.title.localeCompare(a.title, 'ru'));
  }
  return memes;
}
