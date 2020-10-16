
// একটি Array এর সর্বোচ্চ ও সর্বোনিম্ন element নির্ণয়য়ের প্রোগ্রাম লিখ ;

var numbersList = [1,3,4,25,6,200] ;
var Minnumber = numbersList[0] ;
var MaxNumber = numbersList[0];

for(var i = 0 ; i<=numbersList.length ; i++){
    if(numbersList[i] < Minnumber){
        Minnumber = numbersList[i] ;
    }else if(numbersList[i] > MaxNumber){
        MaxNumber = numbersList[i];
    }
}
console.log('Min Number is : ', Minnumber) ;
console.log('Max Number is : ', MaxNumber) ;
