// Задание 1

function concat(a: string, b: string): string {
  return a + b;
}

concat("Hello ", "World");

// Задание 2

const MyHometask: MyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

type HowIDoIt = string;
type SimeArray = Array<string | number>;

interface MyHometask {
  howIDoIt: HowIDoIt;
  simeArray: SimeArray;
  withData: Array<{
    howIDoIt: HowIDoIt;
    simeArray: SimeArray;
  }>;
}

// Задание 3
const arr: MyArray<number> = [1, 2, 3];
const arr2: MyArray<string> = ["1", "2", "3"];

interface MyArray<T> {
  [N: number]: T;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => U,
    initialValue: U
  ): U;
}

let myArr = arr.reduce((sum, current) => sum + current, 0);
let myArr2 = arr2.reduce((sum, current) => sum + current, "s");

// Задание 4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: "win",
  },
};

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
};
