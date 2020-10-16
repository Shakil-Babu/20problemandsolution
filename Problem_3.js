
// তিনটি সংখ্যার মধ্যে বড় সংখ্যা বের করার প্রোগ্রাম লিখ

var firstNumber = parseInt(prompt("Enter first number : "));
var secondNumber = parseInt(prompt("Enter second number : "));
var thirdNumber = parseInt(prompt("Enter third number : "));

if((firstNumber >secondNumber) && (firstNumber > thirdNumber)){
    console.log(`Largest Number is ${firstNumber}`);
}else if((secondNumber  > firstNumber) && (secondNumber > thirdNumber)){
    console.log(`Largest Number is ${secondNumber}`);
}else{
    console.log(`Largest Number is ${thirdNumber}`)
}
