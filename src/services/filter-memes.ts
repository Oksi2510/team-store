interface MemeFilters {
  query: string;
  tag: string;
}

export function filterMemes<T extends { title: string; tags: string[] }>(memes: T[], filters: MemeFilters): T[] {
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
