// Function ব্যাবহার করে কোনো String কে  উল্টানোর Program লিখ  ;

function reverseString(strr){
    var afterReverse = "";
    for(var i = 0 ; i<strr.length ; i++){
        var element = strr[i];
        afterReverse = element+ afterReverse;
    }
    return afterReverse ;

}
var result = reverseString('Shakil Babu');
console.log(result);
