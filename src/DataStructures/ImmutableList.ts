/**
 * Readonly List
 */
class ImmutableList<T> {
  private readonly bucket: Array<T>;

  constructor(...value: Array<Array<T> | ImmutableList<T> | T>) {
    let newValues = new Array<T>();

    for (const val of value) {
      if (Array.isArray(val)) {
        newValues = newValues.concat(val);
      } else if (val instanceof ImmutableList) {
        newValues.concat(val.value());
      } else {
        newValues.push(val);
      }
    }

    this.bucket = newValues;
  }

  [Symbol.iterator]() {
    return this.value();
  }

  /**
   * @returns a copy of the values.
   */
  value(): Array<T> {
    return [...this.bucket];
  }

  /**
   * @returns a concatination of its values plus a given dataset.
   */
  plus(valueToAdd: Array<T> | ImmutableList<T> | T): ImmutableList<T> {
    return new ImmutableList(this.value(), valueToAdd);
  }

  /**
   * Iterates through the list using a given callback function.
   */
  forEach(callback: (element: T) => void): void {
    for (const el of this.value()) {
      callback(el);
    }
  }

  /**
   * Iterates asynchronously through the list using a given callback function.
   */
  async forEachAsync(callback: (element: T) => void): Promise<void> {
    for await (const el of this.value()) {
      callback(el);
    }
  }
}
