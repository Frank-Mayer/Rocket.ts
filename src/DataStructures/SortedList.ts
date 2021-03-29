/**
 * The SortedList is a self sorting typed Array of objects that can be accessed by index
 */
class SortedList<T> {
  private list: Array<T>;
  private hasChangedSinceLastSort: boolean;
  public length: number;
  key: keyof T | undefined;

  constructor(key?: keyof T, template: Array<T> = new Array<T>()) {
    this.key = key;
    this.hasChangedSinceLastSort = false;
    this.list = template;
    this.length = this.list.length;
    if (this.length > 1) {
      this.hasChangedSinceLastSort = true;
    }
  }

  [Symbol.iterator]() {
    this.sort();
    return this.list.values();
  }

  public add(value: T): number {
    this.length++;
    this.list.push(value);
    this.hasChangedSinceLastSort = true;
    return this.length;
  }

  public remove(value: T): boolean {
    let i = this.indexOf(value);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.length--;
      return true;
    }
    return false;
  }

  public pop(amount: number): Set<T> {
    this.sort();
    const ret = new Set<T>();
    for (let i = 0; i < amount; i++) {
      const el = this.list.pop();
      if (el) {
        ret.add(el);
      }
    }
    return ret;
  }

  public shift(amount: number): Set<T> {
    this.sort();
    const ret = new Set<T>();
    for (let i = 0; i < amount; i++) {
      const el = this.list.shift();
      if (el) {
        ret.add(el);
      }
    }
    return ret;
  }

  private getSortingValueOf(a: T): string | T[keyof T] {
    if (this.key) {
      return a[<keyof T>this.key];
    } else {
      return JSON.stringify(a);
    }
  }

  public sort(): void {
    if (this.hasChangedSinceLastSort && this.length > 1) {
      this.list.sort((A, B) => {
        const a = this.getSortingValueOf(A);
        const b = this.getSortingValueOf(B);
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
      this.hasChangedSinceLastSort = false;
    }
  }

  public getAt(index: number): T | null {
    if (index >= 0 && index < this.length) {
      this.sort();
      return this.list[index];
    }
    return null;
  }

  public indexOf(value: T): number {
    if (this.length === 0) {
      return -1;
    }
    this.sort();
    const lookingFor = this.getSortingValueOf(value);
    let firstIndex = 0;
    let lastIndex = this.list.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (
      this.getSortingValueOf(this.list[middleIndex]) !== lookingFor &&
      firstIndex < lastIndex
    ) {
      if (lookingFor < this.getSortingValueOf(this.list[middleIndex])) {
        lastIndex = middleIndex - 1;
      } else if (lookingFor > this.getSortingValueOf(this.list[middleIndex])) {
        firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return this.getSortingValueOf(this.list[middleIndex]) !== lookingFor
      ? -1
      : middleIndex;
  }

  public includes(value: T): boolean {
    return this.indexOf(value) >= 0;
  }

  public forEach(callback: (Element: T) => void): void {
    this.sort();
    for (const el of this.list) {
      callback(el);
    }
  }
}
