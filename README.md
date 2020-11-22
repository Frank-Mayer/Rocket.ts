# Rocket.ts

TypeScript functions and classes for better performance and easier programming

* String.hash
* HashMap
* Queue
* SortedList
* Stack
* StringBuilder
* doOnce
* IndexedDB Helper Functions
* async httpGet, with optional cache (Promise based)
* delay
* retriggerableDelay

in use here: [CMapper](https://cmapper.web.app)

## Performance Test

Compiled for: ES2018

Platform: win32

Hardware: AMD Ryzen 7 3700X Eight-Core Processor 4.4GHz

Node.js: 14.10.0

V8: 8.4.371.19-node.16

| Class      | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 1.000.000 items |
| ---------- | -------- | --------- | ----------- | ------------ | ------------- | --------------- |
| SortedList | add      | 0.16ms    | 0.25ms      | 4.94ms       | 10.25ms       | 46.80ms         |
| Array      | push     | 0.16ms    | 0.17ms      | 3.44ms       | 7.27ms        | 55.53ms         |
|            |          |           |             |              |               |
| SortedList | includes | 0.26ms    | 1.65ms      | 6.22ms       | 44.69ms       | 498.72ms        |
| Array      | includes | 0.05ms    | 0.74ms      | 11.67ms      | 105.32ms      | 1069.92ms       |
|            |          |           |             |              |               |
| SortedList | indexOf  | 0.20ms    | 1.72ms      | 5.33ms       | 47.75ms       | 501.86ms        |
| Array      | indexOf  | 0.05ms    | 0.74ms      | 11.12ms      | 103.85ms      | 1091.95ms       |
