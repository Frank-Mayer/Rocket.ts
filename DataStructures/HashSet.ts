class HashSet<T> {
  private bucket: T[][];
  public length: number;
  // private limit: number;
  constructor() {
    this.bucket = new Array<Array<T>>();
    this.length = 0;
    // this.limit = size;
  }

  private hash(value: T): number {
    return JSON.stringify(value).hash();
    // return hash % this.limit;
  }

  /**
   * Adds all arguments passed, except those already present
   */
  add(token: T | Array<T>): Promise<boolean> {
    return new Promise(async (resolve: (value: boolean) => void) => {
      if (token instanceof Array) {
        let r = false;
        for await (const t of token) {
          if (this.add(t)) {
            r = true;
          }
        }
        resolve(r);
        return;
      }
      let index = this.hash(token);
      if (this.bucket[index]) {
        let inserted = false;
        for await (const el of this.bucket[index]) {
          if (el === token) {
            resolve(false);
            break;
          }
        }
        if (!inserted) {
          // console.debug("HashSet collision at Index " + index.toString());
          this.bucket[index].push(token);
          this.length++;
          resolve(true);
        }
      } else {
        this.bucket[index] = [token];
        this.length++;
        resolve(true);
      }
    });
  }

  /**
   * Removes arguments passed, if they are present
   */
  remove(token: T | T[]): Promise<boolean> {
    return new Promise(async (resolve: (value: boolean) => void) => {
      if (token instanceof Array) {
        let r = false;
        for await (const t of token) {
          if (this.remove(t)) {
            r = true;
          }
        }
        resolve(r);
        return;
      }
      let index = this.hash(token);
      if (!this.bucket[index]) {
        resolve(false);
        return;
      }
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i] === token) {
          this.bucket[index].splice(i, 1);
          this.length--;
          resolve(true);
          return;
        }
      }
      resolve(false);
    });
  }

  /**
   * Returns true if token is present, and false otherwise
   */
  async contains(token: T): Promise<boolean> {
    let index = this.hash(token);
    if (!this.bucket[index]) {
      return false;
    }
    for await (const el of this.bucket[index]) {
      if (el === token) {
        return true;
      }
    }
    return false;
  }

  /**
   * Adds token (same as add()). If force is false, removes token (same as remove()).
   */
  async toggle(token: T): Promise<boolean> {
    let index = this.hash(token);
    if (this.bucket[index]) {
      for (let i = 0; i < this.bucket[index].length; i++) {
        if (this.bucket[index][i] === token) {
          this.bucket[index].splice(i, 1);
          return false;
        }
      }
      this.bucket[index].push(token);
      return true;
    } else {
      this.bucket[index] = [token];
      return true;
    }
  }

  async forEach(callbackfn: (token: T, bucket: T[][]) => void) {
    for await (const el of this.bucket) {
      for await (const token of el) {
        callbackfn(token, this.bucket);
      }
    }
  }

  /**
   * Returns the union of this set and s
   */
  // async union(s: HashSet<T>): Promise<HashSet<T>> {
  //   const ret = new HashSet<T>();
  //   ret.bucket = [...this.bucket];
  //   await s.forEach((t) => ret.add(t));
  //   return ret;
  // }

  /**
   * Returns the intersection of this set and s
   * @param s
   */
  // intersection(s: HashSet<T>) {}

  /**
   * Returns the difference of this set and s
   */
  // difference(s: HashSet<T>) {}

  /**
   * Checks if this is subset of set s
   */
  // isSubsetOf(s: HashSet<T>) {}

  /**
   * Checks if s is subset of this set
   */
  // hasSubset(s: HashSet<T>) {}
}
