import createMemeCard, { type MemeCardData } from '../meme-card/meme-card';

export default function renderMemeList(container: HTMLElement, memes: MemeCardData[]): void {
  container.replaceChildren(...memes.map((meme) => createMemeCard(meme)));
}
