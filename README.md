# Rocket.ts

TypeScript functions and classes for better performance

## Classes

### HashMap

- set(key: any, value: any): void
- delete(key: any): boolean
- pop(key: any): any
- get(key: any): any
- has(key: any): boolean
- toString(): string

### HashSet<T>

- add(token: T | Array<T>): Promise<boolean>
- remove(token: T | T[]): Promise<boolean>
- contains(token: T): Promise<boolean>
- toggle(token: T): Promise<boolean>
- forEach(callbackfn: (token: T, bucket: T[][]) => void): Promise<void>

### Queue<T>

- enqueue(element: T): void
- dequeue(): T | undefined
- peek(): T | undefined

### SortedList<T>

- add(value: T): void
- remove(value: T): boolean
- indexOf(value: T): number
- includes(value: T): boolean

### Stack<T>

- push(item: T): void
- pop(): T | undefined
- peek(): T | undefined

## Functions

- delay(ms: number): Promise<void>

- retriggerableDelay(delayId: string, ms: number, callback: Function): void

- String.hash: () => number

- httpGet(url: string, cached?: boolean): Promise<string>
