import { expect, describe, it } from 'vitest';
import {
  isValidName,
  getUserName,
  saveUserName,
  clearUserName,
  USER_NAME_KEY,
  type UserNameStorage,
} from './user-name';

describe('isValidName', () => {
  it('принимает нормальное имя', () => {
    expect(isValidName('Артур')).toBe(true);
  });

  it('отклоняет пустую строку', () => {
    expect(isValidName('')).toBe(false);
  });

  it('отклоняет строку из пробелов', () => {
    expect(isValidName('   ')).toBe(false);
  });

  it('отклоняет очень длинное имя', () => {
    expect(isValidName('А'.repeat(21))).toBe(false);
  });
});

describe('user name storage', () => {
  it('сохраняет и читает имя', () => {
    const storage = new Map<string, string>();
    const fakeStorage: UserNameStorage = {
      getItem(key) {
        return storage.get(key) ?? null;
      },
      setItem(key, value) {
        storage.set(key, value);
      },
      removeItem(key) {
        storage.delete(key);
      },
    };

    saveUserName(fakeStorage, 'Адольф');

    expect(getUserName(fakeStorage)).toBe('Адольф');
  });

  it('очищает имя', () => {
    const storage = new Map<string, string>([[USER_NAME_KEY, 'Адольф']]);
    const fakeStorage: UserNameStorage = {
      getItem(key) {
        return storage.get(key) ?? null;
      },
      setItem(key, value) {
        storage.set(key, value);
      },
      removeItem(key) {
        storage.delete(key);
      },
    };

    clearUserName(fakeStorage);

    expect(getUserName(fakeStorage)).toBeNull();
  });
});
