interface FilterableMeme {
  title: string;
}

export function filterMemes(memes: FilterableMeme[], query: string): FilterableMeme[] {
  const normalizedQuery = query.toLowerCase();
  if (normalizedQuery === '') {
    return memes;
  }

  return memes.filter((meme) => meme.title.toLowerCase().includes(normalizedQuery));
}
