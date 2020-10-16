// একটি String এর উপাদান গুলোকে আলাদা করার প্রোগ্রাম লিখ ;

var word = 'Shakil Babu' ;
var output = '';
for(var i = 0 ; i<word.length ; i++){
   var result = word[i] + ' ' ;
   output += result;
}
console.log(output);