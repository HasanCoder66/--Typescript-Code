let num: number = 5;
num = 55;
console.log(num);
console.log("hello world");

// in ts we type this array
const multipleValues: unknown[] = ["hasan", 21];
console.log(multipleValues);

const sum = (a: number, b: number): number => {
  return a + b
};

console.log(sum(10, 5));
