// একটি Array এর ২য় সর্বোচ্চ element নির্ণয়য়ের প্রোগ্রাম লিখ ;

var numbersList = [10, 20, 50, 5, 100, 200 , 150];
// simple way to solve this problem

// var sorting = numbersList.sort((a, b) => a - b);
// var cutLastNumber = sorting.splice(-1, 1);
// var secondLargestNumberIs = Number(numbersList.splice(-1, 1));
// console.log("Second Largest number is :", secondLargestNumberIs);



// another way to solve this problem

var maxNumber = numbersList[0] ;
var secondLargest = numbersList[0];
numbersList.forEach((item) => {
    if(item > maxNumber){
        maxNumber = item ;
    }
});
numbersList.forEach((item) => {
    if(! (item == maxNumber) && item){
        secondLargest = item;
    }
})
console.log('Second Largest Number is : ', secondLargest);
