export interface UserNameStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const USER_NAME_KEY = 'user-name';

export function isValidName(name: string): boolean {
  return name.trim().length > 0 && name.trim().length <= 20;
}

export function getUserName(storage: UserNameStorage): string | null {
  return storage.getItem(USER_NAME_KEY);
}

export function saveUserName(storage: UserNameStorage, name: string): void {
  storage.setItem(USER_NAME_KEY, name.trim());
}

export function clearUserName(storage: UserNameStorage): void {
  storage.removeItem(USER_NAME_KEY);
}
