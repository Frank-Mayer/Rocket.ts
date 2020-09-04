class SortedList<T> {
  private list: Array<T>;
  constructor() {
    this.list = new Array<T>();
  }
  add(value: T) {
    this.list.push(value);
  }
  remove(value: T) {
    this.list.splice(this.indexOf(value), 1);
  }
  indexOf(value: T): number {
    this.list.sort();
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
    this.list.sort();
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
