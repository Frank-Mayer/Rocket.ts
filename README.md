<img src="https://raw.githubusercontent.com/Frank-Mayer/Rocket.ts/master/rocket.svg" width="128px">

![twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FFrank-Mayer%2FRocket.ts)

![lgtm js/ts](https://img.shields.io/lgtm/grade/javascript/github/Frank-Mayer/Rocket.ts.svg?logo=lgtm&logoWidth=18)

![lgtm py](https://img.shields.io/lgtm/grade/python/g/Frank-Mayer/Rocket.ts.svg?logo=lgtm&logoWidth=18)

# Rocket.ts

TypeScript functions and classes for better performance and ease of use

Documentation in the [Wiki](https://github.com/Frank-Mayer/Rocket.ts/wiki)

## Performance Test

 Compiled for: ESNEXT

 Platform: darwin

 Hardware: Intel(R) Core(TM) i5-8257U CPU @ 1.40GHz

 Node.js: 14.8.0

 V8: 8.4.371.19-node.12

| Class | Function | 100 items | 1,000 items | 10,000 items | 100,000 items | 1,000,000 items
|---|---|---|---|---|---|---
SortedList | add | 0.01ms | 0.08ms | 1.34ms | 5.86ms | 40.84ms
LinkedList | append | 0.01ms | 0.03ms | 0.34ms | 6.59ms | 311.40ms
Array | push | 0.01ms | 0.09ms | 1.30ms | 4.90ms | 38.83ms
| | | | | | | 
SortedList | includes | 0.02ms | 0.24ms | 3.10ms | 23.48ms | 276.80ms
LinkedList | includes | 0.04ms | 2.51ms | 51.36ms | 418.75ms | 7638.82ms
Array | includes | 0.03ms | 1.06ms | 16.28ms | 146.25ms | 1193.48ms
| | | | | | | 
SortedList | indexOf | 0.02ms | 0.22ms | 2.82ms | 23.97ms | 283.06ms
LinkedList | indexOf | 0.04ms | 2.55ms | 45.66ms | 450.29ms | 5000.08ms
Array | indexOf | 0.02ms | 0.73ms | 10.81ms | 104.18ms | 1054.62ms
