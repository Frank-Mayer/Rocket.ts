declare type LinkedListNode<T> = [
  LinkedListNode<T> | null,
  T,
  LinkedListNode<T> | null
];

/**
 * Represents a doubly linked list
 */
class LinkedList<T> {
  protected head: LinkedListNode<T> | null;
  protected tail: LinkedListNode<T> | null;
  public length: number;

  constructor(content: Array<T> | null = null) {
    this.head = this.tail = null;
    if (content) {
      for (const value of content) {
        this.append(value);
      }
      this.length = content.length;
    } else {
      this.length = 0;
    }
  }

  private LinkedListNode(
    value: T,
    prev: LinkedListNode<T> | null = null,
    next: LinkedListNode<T> | null = null
  ): LinkedListNode<T> {
    return [prev, value, next];
  }

  static of<T>(value: T): LinkedList<T> {
    return new LinkedList<T>([value]);
  }

  [Symbol.iterator]() {
    return this.toArray();
  }

  public append(value: T): void {
    if (!this.tail) {
      this.head = this.tail = this.LinkedListNode(value);
    } else {
      const oldTail = this.tail;
      this.tail = this.LinkedListNode(value);
      oldTail[2] = this.tail;
      this.tail[0] = oldTail;
    }
    this.length++;
  }

  public prepend(value: T): void {
    if (!this.head) {
      this.head = this.tail = this.LinkedListNode(value);
    } else {
      const oldHead = this.head;
      this.head = this.LinkedListNode(value);
      oldHead[0] = this.head;
      this.head[2] = oldHead;
    }
    this.length++;
  }

  public deleteHead(): T | null {
    this.length--;
    if (!this.head) {
      return null;
    } else {
      const removedHead = this.head;
      // if one node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head[2];
        (<LinkedListNode<T>>this.head)[0] = null;
      }
      return removedHead[1];
    }
  }

  public deleteTail(): T | null {
    this.length--;
    if (!this.tail) {
      return null;
    } else {
      const removedTail = this.tail;
      // if one node left
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail[0];
        (<LinkedListNode<T>>this.tail)[2] = null;
      }
      return removedTail[1];
    }
  }

  public splice(start: number, deleteCount: number = 1): boolean {
    if (start < 0 || (deleteCount && deleteCount < 1)) {
      return false;
    }
    let deletedNode: LinkedListNode<T> | null = null;
    let newConnect: LinkedListNode<T> | null = null;
    let currentNode = this.head;
    let index = start;
    for (let i = 0; currentNode; i++) {
      if (i === index) {
        if (deletedNode) {
          newConnect = currentNode;
          break;
        } else {
          deletedNode = currentNode;
        }
        index += deleteCount;
      }
      currentNode = currentNode[2];
    }
    if (deletedNode && newConnect) {
      if (deletedNode[0]) {
        deletedNode[0][2] = newConnect;
        newConnect[0] = deletedNode[0];
        return true;
      } else if (deletedNode === this.head) {
        this.head = newConnect;
        return true;
      }
    }
    return false;
  }

  public clear(clean?: boolean): void {
    if (this.head) {
      if (clean) {
        let currentNode = this.tail;
        while (currentNode) {
          currentNode[2] = null;
          currentNode = currentNode[0];
        }
      } else {
        this.tail = this.head = null;
      }
    }
    this.length = 0;
  }

  public indexOf(value: T): number {
    let currentNode = this.head;
    for (let index = 0; currentNode; index++) {
      if (currentNode[1] === value) {
        return index;
      }
      currentNode = currentNode[2];
    }
    return -1;
  }

  public at(index: number): T | null {
    let currentNode = this.head;
    for (let i = 0; currentNode; i++) {
      if (i === index) {
        return currentNode[1];
      } else if (i > index) {
        return null;
      }
      currentNode = currentNode[2];
    }
    return null;
  }

  public includes(value: T): boolean {
    return this.indexOf(value) >= 0;
  }

  public search(value: T): LinkedListNode<T> | null {
    let currentNode = this.head;
    for (let index = 0; currentNode; index++) {
      if (currentNode[1] === value) {
        return currentNode;
      }
      currentNode = currentNode[2];
    }
    return null;
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public forEach(
    callback: (
      value: T,
      prev: LinkedListNode<T> | null,
      next: LinkedListNode<T> | null,
      index: number
    ) => void
  ): void {
    let currentNode = this.head;
    for (let i = 0; currentNode; i++) {
      callback(currentNode[1], currentNode[0], currentNode[2], i);
      currentNode = currentNode[2];
    }
  }

  public toArray(): Array<T> {
    const r = new Array<T>();
    this.forEach((v) => {
      r.push(v);
    });
    return r;
  }

  public toString(): string {
    return this.toArray().toString();
  }
}
