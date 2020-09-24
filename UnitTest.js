import { HashMap, SortedList, Stack, Queue, HashSet } from "./out/rocket.js";

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
  console.count("Test");
  if (result === expectation) console.log("✅");
  else
    console.error(
      new Error(`❌ value is ${result}, but sould be ${expectation}`)
    );
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
test(sortedList.remove("seehorse"), true);
test(sortedList.remove("bear"), false);
test(sortedList.indexOf("apple"), 0);

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

const hashSet = new HashSet();
hashSet.contains("meep").then((v) => test(v, false));
hashSet.toggle("meep").then((v) => test(v, true));
hashSet.toggle("meep").then((v) => test(v, false));
hashSet.toggle("meep").then((v) => test(v, true));
hashSet.add("i like turtles").then((v) => test(v, true));
hashSet.remove("meep").then((v) => test(v, true));
const hashSetB = new HashSet();
hashSetB.add("ahoi").then((v) => test(v, true));
