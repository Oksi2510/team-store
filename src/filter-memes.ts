export interface FilterableMeme {
  title: string;
  tags: string[];
}

interface MemeFilters {
  query: string;
  tag: string;
}

export function filterMemes(memes: FilterableMeme[], filters: MemeFilters): FilterableMeme[] {
  const normalizedQuery = filters.query.toLowerCase();
  const noTagSelected = filters.tag === '';
  if (normalizedQuery === '' && noTagSelected) {
    return memes;
  }

  return memes.filter((meme) => {
    const matchesQuery = meme.title.toLowerCase().includes(normalizedQuery);
    const matchesTag = noTagSelected || meme.tags.includes(filters.tag);

    return matchesQuery && matchesTag;
  });
}
