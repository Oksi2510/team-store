import ElementHtml from '../../utility/element-html';
import './catalog.css';
import memes from '../../data/memes.json';
import type { Meme } from '../../types/meme';
import createCatalogController from '../../controllers/catalog-controller';

interface CatalogElements {
  element: HTMLElement;
  search: HTMLInputElement;
  tags: HTMLElement;
  list: HTMLElement;
  memes: Meme[];
}

export default function createCatalog(): CatalogElements {
  const catalog = new ElementHtml('section', 'catalog');

  const header = new ElementHtml('header', 'catalog__header');

  const title = new ElementHtml('h1', 'catalog__title', 'Серьёзная энциклопедия несерьёзных вещей');

  const subtitle = new ElementHtml(
    'p',
    'catalog__subtitle',
    'Для важных переговоров, неловких пауз и ситуаций, когда слов уже недостаточно'
  );

  const filters = new ElementHtml('div', 'catalog__filters');

  const search = new ElementHtml('input', 'catalog__search');
  search.getHtmlElement().type = 'search';
  search.getHtmlElement().placeholder = 'Найти мем...';

  const tags = new ElementHtml('div', 'catalog__tags');

  const tagNames = ['Все', ...new Set(memes.flatMap((meme) => meme.tags))];

  tagNames.forEach((tag, index) => {
    const tagElement = new ElementHtml(
      'span',
      index === 0 ? ['catalog__tag', 'catalog__tag--active'] : 'catalog__tag',
      tag
    );

    tags.appendChildNode(tagElement);
  });

  const list = new ElementHtml('div', 'catalog__list');

  header.appendChildNode(title);
  header.appendChildNode(subtitle);

  filters.appendChildNode(search);
  filters.appendChildNode(tags);

  catalog.appendChildNode(header);
  catalog.appendChildNode(filters);
  catalog.appendChildNode(list);

  createCatalogController({
    searchInput: search.getHtmlElement(),
    tagsContainer: tags.getHtmlElement(),
    memeListContainer: list.getHtmlElement(),
    memes,
  });

  return {
    element: catalog.getHtmlElement(),
    search: search.getHtmlElement(),
    tags: tags.getHtmlElement(),
    list: list.getHtmlElement(),
    memes,
  };
}
