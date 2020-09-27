# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 Compiled for: ES2018

 platform: darwin

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 200.000 items
|---|---|---|---|---|---|---
SortedList | add | 0.17ms | 0.26ms | 5.00ms | 11.16ms | 12.20ms
Array | push | 0.11ms | 0.13ms | 2.87ms | 6.97ms | 10.23ms
| | | | | | | 
SortedList | includes | 0.21ms | 1.69ms | 6.75ms | 46.80ms | 98.33ms
Array | includes | 0.05ms | 0.76ms | 11.41ms | 107.37ms | 209.67ms
| | | | | | | 
SortedList | indexOf | 0.20ms | 1.68ms | 6.11ms | 54.77ms | 112.05ms
Array | indexOf | 0.05ms | 0.75ms | 11.83ms | 109.77ms | 224.07ms