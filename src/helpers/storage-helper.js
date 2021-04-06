// Uses localStorage as default, could be changed to indexedDb or other solution if needed
class Storage {
  static store(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) { return false; }
  }

  static retrieve(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (e) { return false; }
  }
}

export { Storage };
