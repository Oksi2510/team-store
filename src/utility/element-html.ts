type HtmlTag = keyof HTMLElementTagNameMap;

type ElementClass = string | string[] | undefined;

export default class ElementHtml<T extends HtmlTag = HtmlTag> {
  private readonly htmlElement: HTMLElementTagNameMap[T];

  constructor(tag: T, className?: ElementClass, textContent = '') {
    this.htmlElement = document.createElement(tag);
    this.setClasses(className);
    this.setTextContent(textContent);
  }

  getHtmlElement(): HTMLElementTagNameMap[T] {
    return this.htmlElement;
  }

  removeHtmlElement(): void {
    this.htmlElement.remove();
  }

  appendChildNode(element: ElementHtml): void {
    this.htmlElement.append(element.getHtmlElement());
  }

  setClasses(classes?: ElementClass): void {
    if (!classes) return;

    const classList = Array.isArray(classes) ? classes : [classes];
    this.htmlElement.classList.add(...classList);
  }

  removeClass(className: string): void {
    this.htmlElement.classList.remove(className);
  }

  setTextContent(textContent: string): void {
    this.htmlElement.textContent = textContent;
  }

  addEventListener(event: keyof HTMLElementEventMap, callback: EventListener): void {
    this.htmlElement.addEventListener(event, callback);
  }

  removeEventListener(event: keyof HTMLElementEventMap, callback: EventListener): void {
    this.htmlElement.removeEventListener(event, callback);
  }
}
