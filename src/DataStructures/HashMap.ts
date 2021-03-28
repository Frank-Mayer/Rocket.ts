/// <reference path="../Extensions/String/hash.ts"/>
/// <reference path="SortedList.ts"/>

/**
 * Represents a collection of key/value pairs that are organized based on the hash code of the key
 */
class HashMap {
  private bucket: any[][][];
  public length: number;
  private hashList: SortedList<number>;

  constructor() {
    this.bucket = new Array<Array<Array<any>>>();
    this.length = 0;
    this.hashList = new SortedList<number>();
  }

  private hash(value: any): number {
    return JSON.stringify(value).hash();
  }

  public set(key: any, value: any): void {
    let index = this.hash(key);
    if (!this.hashList.includes(index)) {
      this.hashList.add(index);
    }
    if (this.bucket[index]) {
      let inserted = false;
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i][0] === key) {
          this.bucket[index][i][1] = value;
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.bucket[index].push([key, value]);
        this.length++;
      }
    } else {
      this.bucket[index] = [[key, value]];
      this.length++;
    }
  }

  public delete(key: any): boolean {
    let index = this.hash(key);
    if (this.bucket[index] === undefined) {
      return false;
    }
    if (this.bucket[index].length === 1 && this.bucket[index][0][0] === key) {
      delete this.bucket[index];
      this.length--;
      return true;
    }
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        delete this.bucket[index][i];
        this.length--;
        return true;
      }
    }
    return false;
  }

  public pop(key: any): any {
    let index = this.hash(key);
    if (this.bucket[index] === undefined) {
      return undefined;
    }
    if (this.bucket[index].length === 1 && this.bucket[index][0][0] === key) {
      const r = this.bucket[index][0][1];
      delete this.bucket[index];
      this.length--;
      return r;
    }
    for (let i = 0; i < this.bucket[index].length; i++) {
      if (this.bucket[index][i][0] === key) {
        const r = this.bucket[index][i][1];
        delete this.bucket[index][i];
        this.length--;
        return r;
      }
    }
    return undefined;
  }

  public get(key: any): any {
    let index = this.hash(key);
    if (this.bucket[index]) {
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i][0] === key) {
          return this.bucket[index][i][1];
        }
      }
    }
    return undefined;
  }

  public has(key: any): boolean {
    let index = this.hash(key);
    if (this.bucket[index]) {
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  public toString(): string {
    let r = "{\n";
    for (const b of this.bucket) {
      if (b) {
        for (const el of b) {
          r += `  { ${JSON.stringify(el[0])} => ${JSON.stringify(el[1])} }\n`;
        }
      }
    }
    r += "}";
    return r;
  }

  public forEach(callback: (el: any[2], map: any[][][]) => void): void {
    if (this.bucket) {
      for (const bucketIndex of this.hashList) {
        let bucket = this.bucket[bucketIndex];
        if (bucket) {
          for (const el of bucket) {
            callback(el, this.bucket);
          }
        }
      }
    }
  }
}
