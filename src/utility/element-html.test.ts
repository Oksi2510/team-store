import { beforeEach, describe, expect, it, vi } from 'vitest';
import ElementHtml from './element-html';

describe('ElementHtml', () => {
  let element: ElementHtml<'div'>;

  beforeEach(() => {
    element = new ElementHtml('div');
  });

  describe('constructor', () => {
    it('создаёт элемент с указанным тегом, классами и текстом', () => {
      const element = new ElementHtml('button', ['btn', 'btn-primary'], 'Нажми меня');

      const htmlElement = element.getHtmlElement();

      expect(htmlElement).toBeInstanceOf(HTMLButtonElement);
      expect(htmlElement.classList.contains('btn')).toBe(true);
      expect(htmlElement.classList.contains('btn-primary')).toBe(true);
      expect(htmlElement.textContent).toBe('Нажми меня');
    });
  });

  describe('getHtmlElement', () => {
    it('возвращает созданный HTML-элемент', () => {
      expect(element.getHtmlElement()).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('removeHtmlElement', () => {
    it('удаляет элемент из DOM', () => {
      document.body.append(element.getHtmlElement());

      element.removeHtmlElement();

      expect(document.body.contains(element.getHtmlElement())).toBe(false);
    });
  });

  describe('appendChildNode', () => {
    it('добавляет дочерний элемент', () => {
      const child = new ElementHtml('span', undefined, 'Дочерний элемент');

      element.appendChildNode(child);

      expect(element.getHtmlElement().firstElementChild).toBe(child.getHtmlElement());
    });
  });

  describe('setClasses', () => {
    it('добавляет один или несколько классов', () => {
      element.setClasses(['first-class', 'second-class']);

      expect(element.getHtmlElement().classList.contains('first-class')).toBe(true);
      expect(element.getHtmlElement().classList.contains('second-class')).toBe(true);
    });

    it('не добавляет классы, если аргумент не передан', () => {
      element.setClasses(undefined);

      expect(element.getHtmlElement().classList.length).toBe(0);
    });
  });

  describe('removeClass', () => {
    it('удаляет указанный класс', () => {
      element.setClasses('test-class');

      element.removeClass('test-class');

      expect(element.getHtmlElement().classList.contains('test-class')).toBe(false);
    });
  });

  describe('setTextContent', () => {
    it('устанавливает текстовое содержимое элемента', () => {
      element.setTextContent('Привет, мир!');

      expect(element.getHtmlElement().textContent).toBe('Привет, мир!');
    });
  });

  describe('addEventListener', () => {
    it('добавляет обработчик события', () => {
      const callback = vi.fn();

      element.addEventListener('click', callback);
      element.getHtmlElement().click();

      expect(callback).toHaveBeenCalledOnce();
    });
  });

  describe('removeEventListener', () => {
    it('удаляет обработчик события', () => {
      const callback = vi.fn();

      element.addEventListener('click', callback);
      element.removeEventListener('click', callback);
      element.getHtmlElement().click();

      expect(callback).not.toHaveBeenCalled();
    });
  });
});
