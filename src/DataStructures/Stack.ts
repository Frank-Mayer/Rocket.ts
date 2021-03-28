/**
 * Represents a last-in-first-out (LIFO) collection of instances of the same specified type
 */
class Stack<T> {
  private storage: Array<T>;
  public length: number;
  constructor() {
    this.storage = new Array<T>();
    this.length = 0;
  }

  public push(item: T): void {
    this.storage.push(item);
    this.length++;
  }

  public pop(): T | undefined {
    let removed = this.storage.pop();
    if (removed) {
      delete this.storage[this.length];
      this.length--;
      return removed;
    } else {
      return undefined;
    }
  }

  public peek(pos: number = 1): T | undefined {
    return this.storage[this.length - pos];
  }
}
