
// দুটি সংখ্যার মান গ্রহণ করে যদি সংখ্যা দুটি জোড় অথবা বিজোড় হয় , তাহলে সত্য অন্যথায় মিথ্যা প্রমাণ করার প্রোগ্রাম লিখ । 

var firstNumber = parseInt(prompt("Enter first number : "));
var secondNumber = parseInt(prompt("Enter second number : "));

if (
  (firstNumber % 2 === 0 && secondNumber % 2 === 0) ||
  (firstNumber % 2 === 1 && secondNumber % 2 === 1)
) {
  console.log("True");
} else {
  console.log("False");
}
