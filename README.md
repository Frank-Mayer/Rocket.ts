# TypedDataStructures

## HashTable

```
const hashTable = new HashTable();
const key0 = ["domplin"];
const key1 = 5;
hashTable.set(key0, 33);
hashTable.set(key1, "ahoi");
hashTable.get(key0); // 33
```

## SortedList

- Gets sorted before lookup if an item has been added since the last sort
- Much faster than array for many lookups but slower if it has to be re-sorted often

```
const list = new SortedList<string>();
list.add("foo");
list.add("bar");
list.add("baz");
list.includes("foobar"); // false
list.indexOf("baz"); // 1
```

## sleep

- Returns a promise that will be fulfilled when the specified time has passed

```
await sleep(500);
```
