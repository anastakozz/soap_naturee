// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const noop = () => {
  return;
};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

interface Item {
  [key: string]: string;
}
interface Store {
  [key: string]: Item;
}

const localStorageMock = (function () {
  let store: Store = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: Item) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    }
  };
})();

const setLocalStorage = (id: string, data: { [key: string]: string }) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

export function setAnonymousToLocalStorage() {
  const mockId = 'anonymousToken';
  const mockJson = { access_token: '12345' }; // eslint-disable-line camelcase

  setLocalStorage(mockId, mockJson);
}

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
setAnonymousToLocalStorage();
