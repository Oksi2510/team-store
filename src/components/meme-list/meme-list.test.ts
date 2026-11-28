import { expect, describe, it } from 'vitest';
import renderMemeList from './meme-list';
import type { MemeCardData } from '../meme-card/meme-card';

const casino: MemeCardData = {
  id: 8,
  title: 'Ёбаный рот этого казино',
  year: 2011,
  image: 'https://memepedia.world/wp-content/uploads/2018/03/ebanyy-rot-etogo-kazino.png',
  tags: ['Классика', 'Реакции', 'Видео'],
};

const catUpd: MemeCardData = {
  id: 30,
  title: 'Кот грузится',
  year: 2017,
  image: 'https://memepedia.world/wp-content/uploads/2019/12/kot-gruzitsja-9.jpg',
  tags: ['Классика', 'Реакции', 'Животные'],
};

describe('renderMemeList', () => {
  it('рисует карточку для каждого мема', () => {
    const container = document.createElement('div');

    renderMemeList(container, [casino, catUpd]);

    expect(container.querySelectorAll('.meme-card')).toHaveLength(2);
  });

  it('очищает контейнер перед обновлением', () => {
    const container = document.createElement('div');
    renderMemeList(container, [casino, catUpd]);

    renderMemeList(container, [casino]);

    expect(container.querySelectorAll('.meme-card')).toHaveLength(1);
  });

  it('показывает название мема', () => {
    const container = document.createElement('div');

    renderMemeList(container, [casino]);

    expect(container.textContent).toContain('Ёбаный рот этого казино');
  });
});
