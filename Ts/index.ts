let num: number = 5;
num = 55;
// console.log(num);
// console.log("hello world");

// in ts we type this array
const multipleValues: unknown[] = ["hasan", 21];
// console.log(multipleValues);

const sum = (a: number, b: number): number => {
  return a + b;
};

// console.log(sum(10, 5));

// video no 4 Practices ===>

let computedVal: number = Math.sqrt(16);
// console.log(computedVal)

let myFullName: String = "Muhammad Hasan";
let myFirstName: string = "Muhammad";
let myLastName: string = "Hassan";

// console.log(myFirstName + " " + myLastName)

// check length of our sentence
let sentence: string = "please subscribe channel";
let sentenceLength: number = sentence.length;

// console.log(sentenceLength);

let text: string = sentence;

// text ko uppercase ker rahay hain yaha
let toUpperCase: string = text.toUpperCase();
// console.log(toUpperCase);

// text ko lowercase ker rahay hain yaha
let toLowerCase: string = text.toLowerCase();
// console.log(toLowerCase);


// Question 1 from thapa ?
// convert longText into short text using substring() method 
let longText: string = "Hi, how are you! i am doing well' what are you doing today ? by the way nothing! just today i m gonna chill😋"

let shortText : string = longText.substring(0,10)
// console.log(shortText);


// Question 2 from thapa
// check equal values answer must be in boolean
const checkEqual : boolean =( myFirstName === myFirstName )
// console.log(checkEqual); //  return true

const checkEqual2 : boolean =( myFirstName === myLastName )
// console.log(checkEqual); //  return false


// Question 3 from thapa 
let product: string = 'Pizza';
let price: number = 650;

let finalResult = `this large ${product} cost is Rs.${price}`
// console.log(finalResult);
