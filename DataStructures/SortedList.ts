class SortedList<T> {
  private list: Array<T>;
  private hasChangedSinceLastSort: boolean;
  public length: number;

  constructor(template: Array<T> = new Array<T>()) {
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

  add(value: T, insertSorted: boolean = false) {
    this.length++;
    if (insertSorted) {
      if (this.length === 1) {
        this.list = [value];
        return;
      }
      this.sort();
      let firstIndex = 0;
      let lastIndex = this.list.length - 1;
      let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

      while (this.list[middleIndex] !== value && firstIndex <= lastIndex) {
        if (value < this.list[middleIndex]) {
          lastIndex = middleIndex - 1;
        } else if (value > this.list[middleIndex]) {
          firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
      }
      this.list.splice(Math.max(0, middleIndex + 1), 0, value);
    } else {
      this.list.push(value);
      this.hasChangedSinceLastSort = true;
    }
  }

  remove(value: T): boolean {
    let i = this.indexOf(value);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.length--;
      return true;
    }
    return false;
  }

  sort() {
    if (this.hasChangedSinceLastSort && this.length > 1) {
      this.list.sort();
      this.hasChangedSinceLastSort = false;
    }
  }

  indexOf(value: T): number {
    if (this.length === 0) {
      return -1;
    }
    this.sort();
    let firstIndex = 0;
    let lastIndex = this.list.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);

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
    }
    this.sort();
    let firstIndex = 0;
    let lastIndex = this.list.length - 1;
    let middleIndex = Math.floor((lastIndex + firstIndex) / 2);
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
