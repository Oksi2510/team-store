interface FilterableMeme {
  title: string;
}

interface MemeFilters {
  query: string;
}

export function filterMemes(memes: FilterableMeme[], filters: MemeFilters): FilterableMeme[] {
  const normalizedQuery = filters.query.toLowerCase();
  if (normalizedQuery === '') {
    return memes;
  }

  return memes.filter((meme) => meme.title.toLowerCase().includes(normalizedQuery));
}
