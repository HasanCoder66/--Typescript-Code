var num = 5;
num = 55;
// console.log(num);
// console.log("hello world");
// in ts we type this array
var multipleValues = ["hasan", 21];
// console.log(multipleValues);
var sum = function (a, b) {
    return a + b;
};
// console.log(sum(10, 5));
// video no 4 Practices ===>
var computedVal = Math.sqrt(16);
// console.log(computedVal)
var myFullName = "Muhammad Hasan";
var myFirstName = "Muhammad";
var myLastName = "Hassan";
// console.log(myFirstName + " " + myLastName)
// check length of our sentence
var sentence = "please subscribe channel";
var sentenceLength = sentence.length;
// console.log(sentenceLength);
var text = sentence;
// text ko uppercase ker rahay hain yaha
var toUpperCase = text.toUpperCase();
// console.log(toUpperCase);
// text ko lowercase ker rahay hain yaha
var toLowerCase = text.toLowerCase();
// console.log(toLowerCase);
// Question 1 from thapa ?
// convert longText into short text using substring() method 
var longText = "Hi, how are you! i am doing well' what are you doing today ? by the way nothing! just today i m gonna chill😋";
var shortText = longText.substring(0, 10);
// console.log(shortText);
// Question 2 from thapa
// check equal values answer must be in boolean
var checkEqual = (myFirstName === myFirstName);
// console.log(checkEqual); //  return true
var checkEqual2 = (myFirstName === myLastName);
// console.log(checkEqual); //  return false
// Question 3 from thapa 
var product = 'Pizza';
var price = 650;
var finalResult = "this large ".concat(product, " cost is Rs.").concat(price);
console.log(finalResult);
