class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const strings = new ArrayOfAnything<string>(['a', 'c', 'b']);

const stringsInferredType = new ArrayOfAnything(['a', 'c', 'b']);

// Example of generics with functions

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3, 4]);
printAnything<string>(['a', 'b', 'c']);

// TS can refer the type of T but still add the T type so Typescript can help us catch errors
printAnything([1, 2, 3, 4]);
printAnything(['a', 'b', 'c']);

// Generic Contrainsts

class Car2 {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) arr[i].print();
}

printHousesOrCars([1, 3, 4]); // Errors because this array of number doesn't have a print() method
printHousesOrCars([new House(), new House()]);
