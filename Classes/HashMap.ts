class HashMap {
  private bucket: any[][][];
  public length: number;
  private limit: number;

  constructor(size: number = 256) {
    if (size < 1) throw new Error("HashMap size must be greater than 0");
    this.bucket = new Array<Array<Array<any>>>();
    this.length = 0;
    this.limit = size;
  }

  private hash(value: any): number {
    let hash = JSON.stringify(value).hash();
    return hash % this.limit;
  }

  set(key: any, value: any) {
    let index = this.hash(key);
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
        console.debug("HashMap collision at Index " + index.toString());
        this.bucket[index].push([key, value]);
        this.length++;
      }
    } else {
      this.bucket[index] = [[key, value]];
      this.length++;
    }
  }

  delete(key: any): boolean {
    let index = this.hash(key);
    if (this.bucket[index] === undefined) return false;
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

  pop(key: any): any {
    let index = this.hash(key);
    if (this.bucket[index] === undefined) return undefined;
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

  get(key: any) {
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

  has(key: any): boolean {
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

  toString(): string {
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
}
