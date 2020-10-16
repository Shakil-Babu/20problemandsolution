// একটি সংখ্যার ফ্যাক্টরিয়াল এর মান নির্ণয় করার প্রোগ্রাম লিখ

var inputNumber = parseInt(prompt("Enter a number : "));
var result = 1;

for (var i = 1; i <= inputNumber; i++) {
  result *= i;
}
console.log(result);
