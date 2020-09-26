# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 Compiled for: ES2018

 platform: darwin

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 200.000 items
|---|---|---|---|---|---|---
SortedList | add | 0.23ms | 3.20ms | 8.64ms | 901.31ms | 6290.45ms
Array | push | 0.20ms | 0.16ms | 2.89ms | 7.15ms | 9.69ms
| | | | | | | 
SortedList | includes | 0.20ms | 1.48ms | 2.68ms | 14.55ms | 30.10ms
Array | includes | 0.05ms | 0.80ms | 11.58ms | 112.25ms | 223.75ms
| | | | | | | 
SortedList | indexOf | 0.19ms | 1.41ms | 2.84ms | 22.66ms | 38.42ms
Array | indexOf | 0.04ms | 0.73ms | 11.16ms | 107.60ms | 217.17ms