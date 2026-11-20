interface FilterableMeme {
  title: string;
}

export function filterMemes(memes: FilterableMeme[], query: string): FilterableMeme[] {
  if (query === '') {
    return memes;
  }

  return memes.filter((meme) => meme.title.includes(query));
}
