"use strict";
import { HashMap, SortedList, Stack, Queue, doOnce } from "./out/rocket.js";

let failed = 0;

const test = (operation, expectation) => {
  let result;
  if (typeof operation === "function") {
    result = operation();
  } else if (operation instanceof Promise) {
    operation.finally((v) => {
      test(v, expectation);
    });
  } else {
    result = operation;
  }
  if (result === expectation) {
    process.stdout.write("✅ ");
    console.count("Test");
  } else {
    failed++;
    process.stderr.write("❌ ");
    console.count("Test");
    process.stderr.write(
      `   value is ${JSON.stringify(result)}, but should be ${JSON.stringify(
        expectation
      )}\n`
    );
  }
};

const hashMap = new HashMap(32);
hashMap.set("meep", "12345");
hashMap.set(33, 4204);
hashMap.set("mep", "lfnrnrg");
test(hashMap.get("meep"), "12345");
test(hashMap.length, 3);
test(hashMap.pop(33), 4204);
test(hashMap.length, 2);

const sortedList = new SortedList();
sortedList.add("tux");
sortedList.add("seehorse");
sortedList.add("apple");
sortedList.add("meep");
sortedList.add("turtle");
sortedList.add("ahoi");
sortedList.add("duck");
sortedList.add("hound");
test(sortedList.remove("seehorse"), true);
test(sortedList.remove("bear"), false);
test(sortedList.includes("mongo"), false);
test(sortedList.includes("duck"), true);
test(sortedList.indexOf("ahoi"), 0);
test(sortedList.indexOf("turtle"), 5);
test(sortedList.indexOf("apple"), 1);

const stack = new Stack();
stack.push("meep");
test(stack.peek(), "meep");
test(stack.pop(), "meep");
test(stack.length, 0);

const queue = new Queue();
queue.enqueue("dog");
queue.enqueue("cat");
queue.enqueue("bird");
test(queue.dequeue(), "dog");
test(queue.dequeue(), "cat");
test(queue.dequeue(), "bird");

// let m = new HashMap();
// m.set("50", "uefiefeuinfenfie");
// m.set(2424, "uefienfie");
// let ptr = Pointer.reference(m);
// test(ptr.dereference().get(2424), m.get(2424));
// let ptr2 = new Pointer(ptr.address);
// test(ptr2.dereference().get(2424), m.get(2424));

let shouldExec = true;
for (let i = 0; i < 3; i++) {
  doOnce(() => {
    test(true, shouldExec);
  });
  shouldExec = false;
}
