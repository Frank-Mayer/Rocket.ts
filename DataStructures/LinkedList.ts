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

  static of<T>(value: T): LinkedList<T> {
    return new LinkedList<T>([value]);
  }

  [Symbol.iterator]() {
    return this.toArray();
  }

  public append(value: T): void {
    if (!this.tail) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      const oldTail = this.tail;
      this.tail = new LinkedListNode(value);
      oldTail.next = this.tail;
      this.tail.previous = oldTail;
    }
    this.length++;
  }

  public prepend(value: T): void {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      const oldHead = this.head;
      this.head = new LinkedListNode(value);
      oldHead.previous = this.head;
      this.head.next = oldHead;
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
        this.head = this.head.next;
        (<LinkedListNode<T>>this.head).previous = null;
      }
      return removedHead.value;
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
        this.tail = this.tail.previous;
        (<LinkedListNode<T>>this.tail).next = null;
      }
      return removedTail.value;
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
      currentNode = currentNode.next;
    }
    if (deletedNode && newConnect) {
      if (deletedNode.previous) {
        deletedNode.previous.next = newConnect;
        newConnect.previous = deletedNode.previous;
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
          currentNode.next = null;
          currentNode = currentNode.previous;
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
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  public at(index: number): T | null {
    let currentNode = this.head;
    for (let i = 0; currentNode; i++) {
      if (i === index) {
        return currentNode.value;
      } else if (i > index) {
        return null;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public includes(value: T): boolean {
    return this.indexOf(value) >= 0;
  }

  public search(value: T): LinkedListNode<T> | null {
    let currentNode = this.head;
    for (let index = 0; currentNode; index++) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
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
      callback(currentNode.value, currentNode.previous, currentNode.next, i);
      currentNode = currentNode.next;
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

class LinkedListNode<T> {
  value: T;
  previous: LinkedListNode<T> | null;
  next: LinkedListNode<T> | null;
  constructor(
    value: T,
    prev: LinkedListNode<T> | null = null,
    next: LinkedListNode<T> | null = null
  ) {
    this.value = value;
    this.previous = prev;
    this.next = next;
  }
}
