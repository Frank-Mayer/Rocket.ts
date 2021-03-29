/**
 * Represents a typed List with a static length cap
 */
class Trace<T> {
  private bucket = new Array<T>();
  private size: number;

  constructor(size: number = 16) {
    this.size = size;
  }

  [Symbol.iterator]() {
    return this.get();
  }

  /**
   * Add a value to the trace
   */
  add(value: T) {
    this.bucket.push(value);
    while (this.bucket.length > this.size) {
      this.bucket.shift();
    }
  }

  /**
   *
   * @param index Position in storage, 0 is latest
   * @returns
   */
  peek(index: number): T {
    return this.bucket[this.bucket.length - (index + 1)];
  }

  /**
   * @returns a copy of the stored values
   */
  get() {
    return [...this.bucket].reverse();
  }
}
