
// দুটি সংখ্যা অদল-বদল করার প্রোগ্রাম লিখ

var firstNumber = parseInt(prompt("Enter first number : "));
var secondNumber = parseInt(prompt("Enter second number : "));

//Before Swap
console.log(`
Before Swap:
firstNumber = ${firstNumber}
secondNumber = ${secondNumber}`);

var temp = firstNumber ;
firstNumber = secondNumber ;
secondNumber = temp  ;

// After Swap

console.log(`
After Swap: 
firstNumber = ${firstNumber}
secondNumber = ${secondNumber}`);
