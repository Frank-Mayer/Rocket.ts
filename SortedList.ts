class SortedList<T> {
  private list: Array<T>;
  private hasChangedSinceLastSort: boolean;
  public length: number;
  constructor() {
    this.hasChangedSinceLastSort = false;
    this.list = new Array<T>();
    this.length = 0;
  }
  add(value: T) {
    this.length++;
    this.list.push(value);
    this.hasChangedSinceLastSort = true;
  }
  remove(value: T): boolean {
    let i = this.indexOf(value);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.hasChangedSinceLastSort = true;
      this.length--;
      return true;
    }
    return false;
  }
  indexOf(value: T): number {
    if (this.length === 0) {
      return -1;
    } else if (this.length === 1 && this.list[0] === value) {
      return 0;
    }
    if (this.hasChangedSinceLastSort) {
      this.list.sort();
    }
    this.hasChangedSinceLastSort = false;
    let firstIndex = 0,
      lastIndex = this.list.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    while (this.list[middleIndex] !== value && firstIndex < lastIndex) {
      if (value < this.list[middleIndex]) {
        lastIndex = middleIndex - 1;
      } else if (value > this.list[middleIndex]) {
        firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return this.list[middleIndex] !== value ? -1 : middleIndex;
  }
  includes(value: T): boolean {
    if (this.length === 0) {
      return false;
    } else if (this.length === 1 && this.list[0] === value) {
      return true;
    }
    if (this.hasChangedSinceLastSort) {
      this.list.sort();
    }
    this.hasChangedSinceLastSort = false;
    let firstIndex = 0,
      lastIndex = this.list.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    while (this.list[middleIndex] !== value && firstIndex < lastIndex) {
      if (value < this.list[middleIndex]) {
        lastIndex = middleIndex - 1;
      } else if (value > this.list[middleIndex]) {
        firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }
    return this.list[middleIndex] === value;
  }
}
