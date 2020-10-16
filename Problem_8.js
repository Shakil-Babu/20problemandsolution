// ১ থেকে N পর্যন্ত সংখ্যার প্রাইম নাম্বার বের করার প্রোগ্রাম লিখ

var startNumber = parseInt(prompt("Enter start number : "));
var endNumber = parseInt(prompt("Enter end number : "));

for (var number = startNumber; number <= endNumber; number++) {
  var ctr = 0;

  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      ctr++;
      break;
    }
  }
  if (ctr === 0 && number != 1) {
    console.log(number);
  }
}
