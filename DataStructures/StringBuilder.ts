/**
 * Represents a mutable string of characters
 */
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

  public toString() {
    return this.bucket.join("");
  }

  public append(value: string) {
    if (value) {
      this.bucket.push(value);
      this.length += value.length;
    }
  }

  public appendLine(value: string) {
    if (value) {
      this.bucket.push(value + "\n");
      this.length += value.length + 1;
    }
  }

  public clear() {
    this.length = 0;
    this.bucket = new Array<string>();
  }

  public replace(searchValue: string | RegExp, replaceValue: string): void {
    this.bucket = [this.toString().replace(searchValue, replaceValue)];
    this.countLength();
  }

  public replaceAll(searchValue: string | RegExp, replaceValue: string): void {
    if (typeof searchValue === "string") {
      const r = new RegExp(searchValue, "g");
      this.bucket = [this.toString().replace(r, replaceValue)];
    } else if (searchValue instanceof RegExp) {
      this.bucket = [this.toString().replace(searchValue, replaceValue)];
    }
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
