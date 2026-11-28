import type { MemeCardData } from '../components/meme-card/meme-card';
import renderMemeList from '../components/meme-list/meme-list';
import { filterMemes } from '../services/filter-memes';
import type { MemeFilters } from '../services/filter-memes';

interface CatalogControllerOptions {
  searchInput: HTMLInputElement;
  tagsContainer: HTMLElement;
  memeListContainer: HTMLElement;
  memes: MemeCardData[];
}

export default function createCatalogController({
  searchInput,
  tagsContainer,
  memeListContainer,
  memes,
}: CatalogControllerOptions): void {
  const filters: MemeFilters = {
    query: '',
    tag: '',
  };

  let searchTimeout: ReturnType<typeof setTimeout>;

  const updateMemeList = (): void => {
    const filteredMemes = filterMemes(memes, filters);
    renderMemeList(memeListContainer, filteredMemes);
  };

  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      filters.query = searchInput.value.trim();
      updateMemeList();
    }, 500);
  });

  tagsContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const selectedTag = target.closest('.catalog__tag');

    if (!(selectedTag instanceof HTMLElement)) {
      return;
    }

    filters.tag = selectedTag.textContent?.trim() === 'Все' ? '' : (selectedTag.textContent?.trim() ?? '');

    const tagElements = tagsContainer.querySelectorAll('.catalog__tag');

    tagElements.forEach((tag) => {
      tag.classList.toggle('catalog__tag--active', tag === selectedTag);
    });

    updateMemeList();
  });

  updateMemeList();
}
