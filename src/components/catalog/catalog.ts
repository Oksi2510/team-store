import ElementHtml from '../../utility/element-html';
import './catalog.css';
import memes from '../../data/memes.json';

export default function createCatalog(): HTMLElement {
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

  return catalog.getHtmlElement();
}
