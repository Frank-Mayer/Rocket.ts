/**
 * Represents a doubly linked list
 */
class LinkedList<T> {
  protected head: LinkedListNode<T> | null;
  protected tail: LinkedListNode<T> | null;

  constructor(content: Array<T> | null) {
    this.head = this.tail = null;
    if (content) {
      for (const value of content) {
        this.append(value);
      }
    }
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
  }

  public deleteHead(): T | null {
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

  public forEach(
    callback: (
      value: T,
      prev: LinkedListNode<T> | null,
      next: LinkedListNode<T> | null
    ) => void
  ): void {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode.value, currentNode.previous, currentNode.next);
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
