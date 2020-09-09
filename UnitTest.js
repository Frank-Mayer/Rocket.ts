import { HashTable, SortedList } from "./out/speedup.js";

const test = (operation, expectation) => {
  let result;
  if (typeof operation === "function") {
    result = operation();
  } else {
    result = operation;
  }
  console.count("Test");
  console.assert(result === expectation, [
    `value is ${result}, but sould be ${expectation}`,
  ]);
};

const hashTable = new HashTable(32);
hashTable.set("meep", "12345");
hashTable.set(33, 4204);
hashTable.set("mep", "lfnrnrg");
test(hashTable.get("meep"), "12345");
test(hashTable.length, 3);
test(hashTable.pop(33), 4204);
test(hashTable.length, 2);