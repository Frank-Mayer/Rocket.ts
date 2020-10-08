class Queue<T> {
  private storage: Array<T>;
  public length: number;

  constructor() {
    this.storage = new Array<T>();
    this.length = 0;
  }

  enqueue(element: T) {
    this.storage.push(element);
    this.length++;
  }

  dequeue(): T | undefined {
    let removed = this.storage.shift();
    if (removed) {
      this.length--;
      return removed;
    } else {
      return undefined;
    }
  }

  peek(pos: number = 1): T | undefined {
    return this.storage[pos - 1];
  }
}
