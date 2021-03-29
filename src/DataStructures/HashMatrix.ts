/// <reference path="../Extensions/String/hash.ts" />

/**
 * Data, stored in a 2D Matrix, indexed by the hash of the coordinates.
 */
class HashMatrix<R extends any, C extends any, T extends any> {
  private bucket: Map<string, T>;

  constructor() {
    this.bucket = new Map<string, T>();
  }

  [Symbol.iterator]() {
    return this.bucket.values;
  }

  /**
   * Gets the full row at the given index in an Array or undefined if the row doesn't exist.
   */
  getRow(index: R): Array<T> | undefined {
    const row = new Array<T>();

    for (const el of this.bucket) {
      if (el[0].startsWith(`${JSON.stringify(index).hash()}∆¿∆`)) {
        row.push(el[1]);
      }
    }

    if (row.length > 0) {
      return row;
    }
    return undefined;
  }

  /**
   * Gets the full column at the given index in an Array or undefined if the column doesn't exist.
   */
  getColumn(index: C): Array<T> | undefined {
    const col = new Array<T>();

    for (const el of this.bucket) {
      if (el[0].endsWith(`∆¿∆${JSON.stringify(index).hash()}`)) {
        col.push(el[1]);
      }
    }

    if (col.length > 0) {
      return col;
    }
    return undefined;
  }

  /**
   * Get the cell value at a specified location.
   */
  getCell(row: R, column: C): T | null {
    const key =
      JSON.stringify(row).hash() + "`∆¿∆" + JSON.stringify(column).hash();

    if (this.bucket.has(key)) {
      return this.bucket.get(key)!;
    }
    return null;
  }

  /**
   * Set the cell value at a specified location.
   */
  setCell(row: R, column: C, value: T): void {
    const key =
      JSON.stringify(row).hash() + "`∆¿∆" + JSON.stringify(column).hash();

    this.bucket.set(key, value);
  }
}
