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

  getRow(index: number): Array<T> | null {
    if (index < this.bucket.length) {
      return this.bucket[index];
    }
    return null;
  }

  getColumn(index: number): Array<T> | null {
    const col = new Array<T>();
    for (const row of this.bucket) {
      if (index < row.length) {
        col.push(row[index]);
      }
    }
    if (col.length > 0) {
      return col;
    }
    return null;
  }

  getCell(row: number, column: number): T | null {
    if (row < this.bucket.length) {
      const rowArr = this.bucket[row];
      if (column < rowArr.length) {
        return rowArr[column];
      }
    }
    return null;
  }

  setCell(row: number, column: number, value: T): void {
    if (row < this.bucket.length) {
      const rowArr = this.bucket[row];
      if (column < rowArr.length) {
        rowArr[column] = value;
      }
    }
  }
}
