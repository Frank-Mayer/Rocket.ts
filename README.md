# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 Compiled for: ES2018

 platform: darwin

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1.000 items | 10.000 items | 100.000 items | 1.000.000 items
|---|---|---|---|---|---|---
SortedList | add | 0.16ms | 0.25ms | 4.84ms | 11.22ms | 57.25ms
Array | push | 0.13ms | 0.15ms | 3.07ms | 6.67ms | 54.53ms
| | | | | | | 
SortedList | includes | 0.21ms | 1.64ms | 5.55ms | 52.53ms | 605.54ms
Array | includes | 0.06ms | 0.78ms | 11.65ms | 113.79ms | 1110.47ms
| | | | | | | 
SortedList | indexOf | 0.20ms | 1.68ms | 4.75ms | 44.15ms | 475.84ms
Array | indexOf | 0.05ms | 0.76ms | 11.82ms | 109.76ms | 1055.08ms