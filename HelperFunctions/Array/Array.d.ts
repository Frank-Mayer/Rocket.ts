interface Array<T extends any> {
  /**
   * Fisher-Yates Shuffle
   */
  shuffle: () => Array<T>;

  clear: () => Array<T>;

  searchFor: (comparator: (x: T) => boolean) => T;
}

interface Array<T extends number> {
  average: () => number;
  sum: () => number;
}

interface Array<T extends object> {
  joinField: (fieldName: keyof T, separator?: string) => string;
}
