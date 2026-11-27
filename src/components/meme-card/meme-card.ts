import ElementHtml from '../../utility/element-html';
import './meme-card.css';

interface MemeCardData {
  id: number;
  image: string;
  title: string;
  tags: string[];
  year: number;
}

export default function createMemeCard(data: MemeCardData): HTMLElement {
  const card = new ElementHtml('article', 'meme-card');

  const image = new ElementHtml('img', 'meme-card__image');
  image.getHtmlElement().src = data.image;
  image.getHtmlElement().alt = data.title;

  const content = new ElementHtml('div', 'meme-card__content');

  const title = new ElementHtml('h3', 'meme-card__title', data.title);
  const separator = new ElementHtml('span', 'meme-card__separator', '·');

  const metadata = new ElementHtml('div', 'meme-card__metadata');

  data.tags.forEach((tag) => {
    const tagElement = new ElementHtml('span', 'meme-card__tag', tag);
    metadata.appendChildNode(tagElement);
  });

  const year = new ElementHtml('span', 'meme-card__year', String(data.year));

  content.appendChildNode(title);

  title.appendChildNode(separator);
  title.appendChildNode(year);
  content.appendChildNode(metadata);

  card.appendChildNode(image);
  card.appendChildNode(content);

  return card.getHtmlElement();
}
