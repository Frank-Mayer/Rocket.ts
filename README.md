# TypedDataStructures

## SortedList

- Gets sorted before lookup if an item has been added since the last sort
- Much faster than array for many lookups but slower if it has to be re-sorted often

```
const list = new SortedList<string>();
list.add("foo");
list.add("bar");
list.add("baz");
...
if (list.includes("foobar")) {
  ...
}
```

## sleep

- Returns a promise that will be fulfilled when the specified time has passed

```
await sleep(500);
```
