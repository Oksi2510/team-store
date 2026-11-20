interface FilterableMeme {
  title: string;
  categories: string[];
}

interface MemeFilters {
  query: string;
  category: string;
}

export function filterMemes(memes: FilterableMeme[], filters: MemeFilters): FilterableMeme[] {
  const normalizedQuery = filters.query.toLowerCase();
  const noCategorySelected = filters.category === '';
  if (normalizedQuery === '' && noCategorySelected) {
    return memes;
  }

  return memes.filter((meme) => {
    const matchesQuery = meme.title.toLowerCase().includes(normalizedQuery);
    const matchesCategory = noCategorySelected || meme.categories.includes(filters.category);

    return matchesQuery && matchesCategory;
  });
}
