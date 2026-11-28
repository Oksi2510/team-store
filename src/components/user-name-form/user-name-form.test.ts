import { expect, describe, it } from 'vitest';
import createUserNameForm from './user-name-form';

describe('createUserNameForm', () => {
  it('не отправляет пустое имя и показывает ошибку', () => {
    const form = createUserNameForm({ onSubmit: () => {} });

    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(form.textContent).toContain('Введите имя');
  });

  it('отправляет введённое имя', () => {
    let submitted = '';

    const form = createUserNameForm({ onSubmit: (name) => (submitted = name) });
    const input = form.querySelector('input');
    input!.value = 'Ким';

    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(submitted).toBe('Ким');
  });

  it('обрезает пробелы по краям', () => {
    let submitted = '';

    const form = createUserNameForm({ onSubmit: (name) => (submitted = name) });
    const input = form.querySelector('input');
    input!.value = ' Ким  ';

    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(submitted).toBe('Ким');
  });
});
