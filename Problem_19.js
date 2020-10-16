//একটা String এ কয়টা Number আছে তা Count করার Program লিখ ;

var str = "Shakil12323";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numberCount = 0;
for (var i = 0; i <= str.length; i++) {
  numbers.forEach((item) => {
    if (str[i] == item) {
      numberCount++;
    }
  });
}
console.log(numberCount);

