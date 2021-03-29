/**
 * Data, stored in a 2D Matrix, indexed by the coordinates
 */
class Matrix<T extends any> {
  private bucket: Array<Array<T>>;

  constructor() {
    this.bucket = new Array<Array<T>>();
  }

  [Symbol.iterator]() {
    const arr = new Array<{ value: T; row: number; col: number }>();
    for (let row = 0; row < this.bucket.length; row++) {
      const rowArr = this.bucket[row];
      for (let col = 0; col < this.bucket.length; col++) {
        arr.push({ value: rowArr[col], row: row, col: col });
      }
    }
    return arr;
  }

  /**
   * Returns the full row at the given index in an Array or undefined if the row doesn't exist.
   */
  getRow(index: number): Array<T> | undefined {
    if (index < this.bucket.length) {
      return this.bucket[index];
    }
    return undefined;
  }

  /**
   * Returns the full column at the given index in an Array or undefined if the column doesn't exist.
   */
  getColumn(index: number): Array<T> | undefined {
    const col = new Array<T>();
    for (const row of this.bucket) {
      if (index < row.length) {
        col.push(row[index]);
      }
    }
    if (col.length > 0) {
      return col;
    }
    return undefined;
  }

  /**
   * Returns the cell at a specified location.
   */
  getCell(row: number, column: number): T | undefined {
    if (row < this.bucket.length) {
      const rowArr = this.bucket[row];
      if (column < rowArr.length) {
        return rowArr[column];
      }
    }
    return undefined;
  }

  /**
   * Sets the cell at a specified location.
   */
  setCell(row: number, column: number, value: T): void {
    if (row < this.bucket.length) {
      const rowArr = this.bucket[row];
      if (column < rowArr.length) {
        rowArr[column] = value;
      }
    }
  }
}
