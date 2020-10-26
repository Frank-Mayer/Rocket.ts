class StringBuilder {
  private bucket: Array<string>;
  public length: number;

  constructor(value: string | undefined = undefined) {
    this.bucket = new Array<string>();
    if (value) {
      this.bucket.push(value);
      this.length = value.length;
    } else {
      this.length = 0;
    }
  }

  [Symbol.iterator]() {
    return this.toString().split("");
  }

  toString() {
    return this.bucket.join("");
  }

  append(value: string) {
    if (value) {
      this.bucket.push(value);
      this.length += value.length;
    }
  }

  appendWithLinebreak(value: string) {
    if (value) {
      this.bucket.push(value + "\n");
      this.length += value.length + 1;
    }
  }

  clear() {
    this.length = 0;
  }

  replace(searchValue: string | RegExp, replaceValue: string) {
    this.bucket = [this.toString().replace(searchValue, replaceValue)];
    this.countLength();
  }

  private async countLength() {
    let c = 0;
    for await (const el of this.bucket) {
      c += el.length;
    }
    this.length = c;
  }
}
