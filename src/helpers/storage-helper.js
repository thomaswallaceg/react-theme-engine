// Uses localStorage as default, could be changed to indexedDb or other solution if needed
class Storage {
  static store(key, value) {
    window.localStorage.setItem(key, value);
  }

  static retrieve(key) {
    return window.localStorage.getItem(key);
  }
}

export { Storage };
