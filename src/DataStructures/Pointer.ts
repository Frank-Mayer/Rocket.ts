// class Pointer<T> {
//   private value: T | null;
//   address: number;

//   /**
//    *Create new Pointer
//    * @param objRef Reference to an object
//    */
//   constructor(address: number = -1) {
//     if (address < 0) {
//       this.address = Heap.getFreeSpace();
//     } else {
//       this.address = address;
//     }
//     if (Heap.stack.length - 1 < this.address) {
//       console.log("---");
//       Heap.stack[this.address] = null;
//     }
//     this.value = <T>Heap.stack[this.address];
//   }

//   getValue(): T | null {
//     return this.value;
//   }

//   setValue(objectRef: T): void {
//     this.value = objectRef;
//   }

//   toString(): string {
//     return this.address.toString(16);
//   }

//   static reference<T>(objectRef: T): Pointer<T> {
//     const ptr = new Pointer<T>();
//     ptr.setValue(objectRef);
//     return ptr;
//   }

//   dereference(): T | null {
//     return this.value;
//   }

//   delete(): void {
//     this.value = null;
//     Heap.stack[this.address] = undefined;
//   }
// }

// const Heap = {
//   stack: new Array<any>(),
//   getFreeSpace(): number {
//     for (let i = 0; i < this.stack.length; i++) {
//       if (!this.stack[i]) {
//         return i;
//       }
//     }
//     return this.stack.length;
//   },
// };
