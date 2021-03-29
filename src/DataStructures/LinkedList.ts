declare type LinkedListNode<T> = [
  LinkedListNode<T> | undefined,
  T,
  LinkedListNode<T> | undefined
];

/**
 * Represents a doubly linked list
 */
class LinkedList<T> {
  protected head: LinkedListNode<T> | undefined;
  protected tail: LinkedListNode<T> | undefined;
  public length: number;

  constructor(content?: Array<T>) {
    this.head = this.tail = undefined;
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
    prev: LinkedListNode<T> | undefined = undefined,
    next: LinkedListNode<T> | undefined = undefined
  ): LinkedListNode<T> {
    return [prev, value, next];
  }

  /**
   * Initializes a new instance of the LinkedList class that contains a given value.
   */
  static of<T>(value: T): LinkedList<T> {
    return new LinkedList<T>([value]);
  }

  [Symbol.iterator]() {
    return this.toArray();
  }

  /**
   * Adds a new node containing the specified value at the end of the LinkedList.
   */
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

  /**
   * Adds a new node containing the specified value at the start of the LinkedList.
   */
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

  /**
   * Deletes the head node, node before becomes new head.
   */
  public deleteHead(): T | undefined {
    this.length--;
    if (!this.head) {
      return undefined;
    } else {
      const removedHead = this.head;
      // if one node left
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        this.head = this.head[2];
        (<LinkedListNode<T>>this.head)[0] = undefined;
      }
      return removedHead[1];
    }
  }

  /**
   * Deletes the tail node, node before becomes new tail.
   */
  public deleteTail(): T | undefined {
    this.length--;
    if (!this.tail) {
      return undefined;
    } else {
      const removedTail = this.tail;
      // if one node left
      if (this.head === this.tail) {
        this.head = this.tail = undefined;
      } else {
        this.tail = this.tail[0];
        (<LinkedListNode<T>>this.tail)[2] = undefined;
      }
      return removedTail[1];
    }
  }

  /**
   * Cuts out a specific area of the LinkedList with a given index and the amount of nodes to delete.
   * @param start index to start
   * @param deleteCount
   * @returns true if the action was possible, false if not.
   */
  public splice(start: number, deleteCount: number = 1): boolean {
    if (start < 0 || (deleteCount && deleteCount < 1)) {
      return false;
    }
    let deletedNode: LinkedListNode<T> | undefined = undefined;
    let newConnect: LinkedListNode<T> | undefined = undefined;
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

  /**
   * Removes all nodes from the LinkedList.
   */
  public clear(): void {
    if (this.head) {
      this.tail = this.head = undefined;
    }
    this.length = 0;
  }

  /**
   * Finds the first node that contains the specified value.
   */
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

  /**
   * Finds the node at the given index
   */
  public at(index: number): T | undefined {
    let currentNode = this.head;
    for (let i = 0; currentNode; i++) {
      if (i === index) {
        return currentNode[1];
      } else if (i > index) {
        return undefined;
      }
      currentNode = currentNode[2];
    }
    return undefined;
  }

  /**
   * Determines whether a value is in the LinkedList
   */
  public includes(value: T): boolean {
    return this.indexOf(value) >= 0;
  }

  /**
   * Finds the first node that contains the specified value and returns a reference to it.
   */
  public search(value: T): LinkedListNode<T> | undefined {
    let currentNode = this.head;
    for (let index = 0; currentNode; index++) {
      if (currentNode[1] === value) {
        return currentNode;
      }
      currentNode = currentNode[2];
    }
    return undefined;
  }

  /**
   * Checks whether the List contains nodes or not.
   */
  public isEmpty(): boolean {
    return !this.head;
  }

  /**
   * Iterates through the list using a given callback function.
   */
  public forEach(
    callback: (
      value: T,
      prev: LinkedListNode<T> | undefined,
      next: LinkedListNode<T> | undefined,
      index: number
    ) => void
  ): void {
    let currentNode = this.head;
    for (let i = 0; currentNode; i++) {
      callback(currentNode[1], currentNode[0], currentNode[2], i);
      currentNode = currentNode[2];
    }
  }

  /**
   * @returns a new Array using the LinkedLists nodes.
   */
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
