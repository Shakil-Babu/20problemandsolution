
// কয়েকটি input নিয়ে একটি Array তে Element সংরক্ষণ ও প্রিন্ট করার প্রোগ্রাম লিখ ;

var inputNumbers = parseInt(prompt('How much number need you ? '));
var array = [] ;
for(var i = 1; i<=inputNumbers ; i++){
    var ele = prompt('Enter element : ') ;
    array.push(ele);
}

for(var j = 0 ; j<array.length ; j++){
    console.log(array[j]);
}
