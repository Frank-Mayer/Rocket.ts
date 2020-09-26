# Rocket.ts

TypeScript functions and classes for better performance

## Performance Test

 platform: darwin

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 1.000 items | 2.000 items | 5.000 items | 10.000 items | 100.000 items
|---|---|---|---|---|---|---
SortedList | add | 298ms | 1072ms | 2943ms | 1613ms | 5358ms
HashSet | add | 1910ms | 4569ms | 11904ms | 24742ms | 199216ms
Array | push | 136ms | 141ms | 377ms | 880ms | 4666ms
| | | | | | | 
SortedList | includes | 1867ms | 2159ms | 5098ms | 5239ms | 65895ms
HashSet | contains | 604ms | 898ms | 12867ms | 9441ms | 117424ms
Array | includes | 1218ms | 4473ms | 26955ms | 248ms | 2465ms
| | | | | | | 
SortedList | indexOf | 1863ms | 1581ms | 5291ms | 5448ms | 66172ms
HashSet | - | - | - | - | - | -
Array | indexOf | 1247ms | 4455ms | 27251ms | 246ms | 2720ms