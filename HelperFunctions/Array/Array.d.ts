interface Array<T extends any> {
  /**
   * Fisher-Yates Shuffle
   */
  shuffle: () => Array<T>;

  clear: () => Array<T>;
}

interface Array<T extends number> {
  average: () => number;
  sum: () => number;
}
