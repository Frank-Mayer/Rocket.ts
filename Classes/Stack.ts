class Stack<T> {
  private storage: Array<T>;
  public length: number;
  constructor() {
    this.storage = new Array<T>();
    this.length = 0;
  }

  push(item: T) {
    this.storage.push(item);
    this.length++;
  }

  pop(): T | undefined {
    let removed = this.storage.pop();
    if (removed) {
      delete this.storage[this.length];
      this.length--;
      return removed;
    } else {
      return undefined;
    }
  }

  peek(): T | undefined {
    return this.storage[this.length - 1];
  }
}
