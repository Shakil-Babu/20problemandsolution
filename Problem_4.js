
// একটি বর্ণ Vowel নাকি Constant তা বের করার প্রোগ্রাম লিখ

var Letter = prompt('Enter Your Letter : ') ;
var convertLower = Letter.toLocaleLowerCase();

if((convertLower === 'a')|| (convertLower === 'e') || (convertLower === 'i') || (convertLower === 'o') || (convertLower === 'u')){
    console.log('Letter is : Vowel');
}else{
    console.log('Letter is : Consonant');
}