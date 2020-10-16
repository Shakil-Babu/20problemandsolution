
// একটি Array এর element গুলোকে Ascending এবং Descending আকারে সাজাও ;

var numberList = [1,2,1,3,4,66,33,4,5,20];

// for Aescending
console.log('Aescending List :');
var Aescending = numberList.sort((a,b) => a-b);
Aescending.forEach(item => {
    console.log(item)
})

// for Descending
console.log('Descending List :');
var Descending = numberList.sort((a,b)=> b-a) ;
Descending.forEach(item => {
    console.log(item);
})

