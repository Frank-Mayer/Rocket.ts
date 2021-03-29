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

  value(): Array<T> {
    return [...this.bucket];
  }

  plus(valueToAdd: Array<T> | ImmutableList<T> | T): ImmutableList<T> {
    return new ImmutableList(this.value(), valueToAdd);
  }

  forEach(callback: (element: T) => void): void {
    for (const el of this.bucket) {
      callback(el);
    }
  }

  async forEachAsync(callback: (element: T) => void): Promise<void> {
    for await (const el of this.bucket) {
      callback(el);
    }
  }
}
