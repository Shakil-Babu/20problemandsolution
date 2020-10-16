// একটি Array থেকে Duplicate Element মুছে ফেলার প্রোগ্রাম লিখ ;

var friendList = ['Shakil','Torikus','Morshed','Arafat','Morshed','Torikus',2,2];
var mainList =[];

for(var i = 0 ; i<friendList.length ; i++){
    var element = friendList[i];
    var indexVal = mainList.indexOf(element);

    if(indexVal == -1 ){
        mainList.push(element);
    }
}
console.log(mainList);