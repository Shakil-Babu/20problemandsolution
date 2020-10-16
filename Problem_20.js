//একটা sentence এ মোট কতটি শব্দ আছে তা count করার প্রোগ্রাম লিখ ; (Sentence এ একাধিক space থাকতে পারে কিন্তু সেগুলো count হবে নাহ !)

var sentence = 'I am  shakil  Babu from Bogura' ;
var spliting= sentence.split(' ');
var result = spliting.length ;

spliting.forEach((item) => {
    if(item === ''){
        result -- ;
    }
})

console.log(result)