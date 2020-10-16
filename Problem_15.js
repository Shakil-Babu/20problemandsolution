
// ১ থেকে n সংখ্যক সংখ্যা পর্যন্ত fibonacci  সংখ্যা বের করার প্রোগ্রাম লিখ ;

var fibonacci = function(n){
    return n<2 ? n : fibonacci (n-1) + fibonacci(n-2);
};
for(var i = 0; i<=10 ; i++){
    console.log(fibonacci(i));
}

// another solution 

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);