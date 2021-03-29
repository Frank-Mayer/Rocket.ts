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

  /**
   * Adds a value to the end of the Queue.
   */
  public enqueue(element: T): void {
    this.storage.push(element);
    this.length++;
  }

  /**
   * Removes and returns the item at the beginning of the Queue
   */
  public dequeue(): T | undefined {
    let removed = this.storage.shift();
    if (removed) {
      this.length--;
      return removed;
    } else {
      return undefined;
    }
  }

  /**
   * @returns the item at the given index of the Queue without removing it
   */
  public peek(index: number = 0): T | undefined {
    return this.storage[index];
  }
}
