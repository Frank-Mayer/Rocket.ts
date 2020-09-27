# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 Compiled for: ES2018

 platform: darwin

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 200.000 items
|---|---|---|---|---|---|---
SortedList | add | 0.15ms | 0.21ms | 4.38ms | 6.21ms | 9.57ms
Array | push | 0.17ms | 0.16ms | 3.65ms | 8.31ms | 10.26ms
| | | | | | | 
SortedList | includes | 0.22ms | 1.70ms | 7.70ms | 54.79ms | 111.04ms
Array | includes | 0.04ms | 0.74ms | 10.96ms | 117.84ms | 229.68ms
| | | | | | | 
SortedList | indexOf | 0.24ms | 1.78ms | 5.79ms | 56.37ms | 114.65ms
Array | indexOf | 0.04ms | 0.77ms | 11.10ms | 108.37ms | 227.51ms