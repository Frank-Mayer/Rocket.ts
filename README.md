# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 Compiled for: ES2018

 Platform: darwin

 Hardware: Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 1.000.000 items
|---|---|---|---|---|---|---
SortedList | add | 0.16ms | 0.25ms | 5.06ms | 10.14ms | 56.21ms
LinkedList | append | 0.21ms | 0.36ms | 4.06ms | 7.05ms | 132.40ms
Array | push | 0.08ms | 0.09ms | 1.13ms | 4.34ms | 67.57ms
| | | | | | | 
SortedList | includes | 0.23ms | 1.94ms | 6.73ms | 44.04ms | 476.03ms
LinkedList | includes | 0.32ms | 3.14ms | 38.77ms | 316.35ms | 4337.79ms
Array | includes | 0.05ms | 0.75ms | 11.01ms | 105.46ms | 1082.75ms
| | | | | | | 
SortedList | indexOf | 0.20ms | 1.68ms | 5.47ms | 51.42ms | 565.32ms
LinkedList | indexOf | 0.06ms | 1.93ms | 34.75ms | 308.82ms | 4619.42ms
Array | indexOf | 0.04ms | 0.75ms | 10.87ms | 105.45ms | 1098.49ms