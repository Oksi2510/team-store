import ElementHtml from '../../utility/element-html';
import { isValidName } from '../../services/user-name';

interface UserNameFormOptions {
  initialName?: string;
  onSubmit: (name: string) => void;
}

export default function createUserNameForm({ initialName = '', onSubmit }: UserNameFormOptions): HTMLElement {
  const form = new ElementHtml('form', 'user-name-form');

  const input = new ElementHtml('input', 'user-name-form__input');
  input.getHtmlElement().type = 'text';
  input.getHtmlElement().placeholder = 'Как тебя зовут?';
  input.getHtmlElement().value = initialName;

  const button = new ElementHtml('button', 'user-name-form__button', 'Сохранить');
  button.getHtmlElement().type = 'submit';

  const error = new ElementHtml('p', 'user-name-form__error');

  form.appendChildNode(input);
  form.appendChildNode(button);
  form.appendChildNode(error);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = input.getHtmlElement().value.trim();

    if (!isValidName(name)) {
      error.setTextContent('Введите имя (1–20 символов)');
      return;
    }

    error.setTextContent('');
    onSubmit(name);
  });

  return form.getHtmlElement();
}
