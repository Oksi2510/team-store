export type SortOrder = 'title-asc' | 'title-desc';

export function sortMemes<T extends { title: string }>(memes: T[], order: SortOrder): T[] {
  const direction = order === 'title-asc' ? 1 : -1;
  return [...memes].sort((a, b) => direction * a.title.localeCompare(b.title, 'ru'));
}
