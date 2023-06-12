/*"use srict";*/
/*console.log('Hello world');
document.getElementById('text').innerHTML = 'Текст для поля';*/

/*
//Синтаксис
let message = "Hello!";

if (2 > 1) {
    //true
    console.log(message);
}*/


/*let message = "Привіт";

let first = 5;
let second = 5;

if(first === second){
    console.log(message);
}


//Блоки ELSE та ELSE IF
let message = "Bonjour";
let number = 5;

if (number > 1){    //number > 10   false
    console.log(message);
} else {
    console.log('Умова не виконана :(')
}
*/



//Умовний оператор "?"
let message = "Hello";
let messageEnd;

/*let messageEnd;
if (5 > 1){
    messageEnd =  ",Mariia";
} else{
    messageEnd = ",Masha";
}

let messageEnd = (5 > 1) ? ",Mariia" : ",Masha";
*/

if(5 > 50){
  messageEnd = ",Dasha";
}else if (5 > 30){
    messageEnd = ",Masha";
}else if (5 > 10){
    messageEnd = ",Nastiia";
}else if (5 > 1){
    messageEnd = ",Olga";
}

message += messageEnd;
console.log(message);


