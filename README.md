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
SortedList | add | 0.16ms | 0.25ms | 5.13ms | 10.89ms | 56.61ms
Array | push | 0.12ms | 0.15ms | 3.08ms | 7.27ms | 55.53ms
| | | | | | | 
SortedList | includes | 0.28ms | 1.65ms | 6.65ms | 44.69ms | 498.72ms
Array | includes | 0.05ms | 0.74ms | 11.67ms | 105.32ms | 1069.92ms
| | | | | | | 
SortedList | indexOf | 0.20ms | 1.72ms | 5.55ms | 52.71ms | 576.83ms
Array | indexOf | 0.05ms | 0.74ms | 11.12ms | 103.85ms | 1091.95ms