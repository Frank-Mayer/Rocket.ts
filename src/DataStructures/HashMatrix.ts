/// <reference path="../Extensions/String/hash.ts" />

class HashMatrix<R extends any, C extends any, T extends any> {
  private bucket: Map<string, T>;

  constructor() {
    this.bucket = new Map<string, T>();
  }

  [Symbol.iterator]() {
    return this.bucket.values;
  }

  getRow(index: R): Array<T> | null {
    const row = new Array<T>();

    for (const el of this.bucket) {
      if (el[0].startsWith(`${JSON.stringify(index).hash()}∆¿∆`)) {
        row.push(el[1]);
      }
    }

    if (row.length > 0) {
      return row;
    }
    return null;
  }

  getColumn(index: C): Array<T> | null {
    const col = new Array<T>();

    for (const el of this.bucket) {
      if (el[0].endsWith(`∆¿∆${JSON.stringify(index).hash()}`)) {
        col.push(el[1]);
      }
    }

    if (col.length > 0) {
      return col;
    }
    return null;
  }

  getCell(row: R, column: C): T | null {
    const key =
      JSON.stringify(row).hash() + "`∆¿∆" + JSON.stringify(column).hash();

    if (this.bucket.has(key)) {
      return this.bucket.get(key)!;
    }
    return null;
  }

  setCell(row: R, column: C, value: T): void {
    const key =
      JSON.stringify(row).hash() + "`∆¿∆" + JSON.stringify(column).hash();

    this.bucket.set(key, value);
  }
}
