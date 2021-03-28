/**
 * Represents a first-in, first-out collection of objects
 */
class Queue<T> {
  private storage: Array<T>;
  public length: number;

  constructor() {
    this.storage = new Array<T>();
    this.length = 0;
  }

  [Symbol.iterator]() {
    return this.storage;
  }

  public enqueue(element: T): void {
    this.storage.push(element);
    this.length++;
  }

  public dequeue(): T | undefined {
    let removed = this.storage.shift();
    if (removed) {
      this.length--;
      return removed;
    } else {
      return undefined;
    }
  }

  public peek(pos: number = 1): T | undefined {
    return this.storage[pos - 1];
  }
}
