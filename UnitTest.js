"use strict";
import {
  rocket_HashMap,
  rocket_SortedList,
  rocket_Stack,
  rocket_Queue,
  rocket_HashSet,
} from "./out/rocket.js";

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

const hashMap = new rocket_HashMap(32);
hashMap.set("meep", "12345");
hashMap.set(33, 4204);
hashMap.set("mep", "lfnrnrg");
test(hashMap.get("meep"), "12345");
test(hashMap.length, 3);
test(hashMap.pop(33), 4204);
test(hashMap.length, 2);

const sortedList = new rocket_SortedList();
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

const stack = new rocket_Stack();
stack.push("meep");
test(stack.peek(), "meep");
test(stack.pop(), "meep");
test(stack.length, 0);

const queue = new rocket_Queue();
queue.enqueue("dog");
queue.enqueue("cat");
queue.enqueue("bird");
test(queue.dequeue(), "dog");
test(queue.dequeue(), "cat");
test(queue.dequeue(), "bird");

const hashSet = new rocket_HashSet();
hashSet.contains("meep").then((v) => test(v, false));
hashSet.toggle("meep").then((v) => test(v, true));
hashSet.toggle("meep").then((v) => test(v, false));
hashSet.toggle("meep").then((v) => test(v, true));
hashSet.add("i like turtles").then((v) => test(v, true));
hashSet.remove("meep").then((v) => test(v, true));
const hashSetB = new rocket_HashSet();
hashSetB.add("ahoi").then((v) => test(v, true));

let testText =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. \nDuis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.\nUt wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore";
let enc = testText.encode();
test(enc.decode(), testText);
