// console.log("Hello World JS");
// var table = "Normal table";
// let chair = "One chair";
// console.log(table);
// console.log(chair);
// let testBoolean = true;
// console.log(testBoolean);
// let testString = "text";
// console.log(testStr+ing);
// let testNumber = 10;
// console.log(testNumber);
// let testBooleanObject = new Boolean(true);
// console.log(testBooleanObject);
// let testNumberObject = new Number(10);
// console.log(testNumberObject);
// let testStringObject = new String("text");
// console.log(testStringObject);


//Concatemate variables
// let name = "John";
// let surname = "Doe";
// let question = "How are you "+name+" "+surname+"?";
// console.log(question);


// //To ES6 we can use backtick to create interpolated strings
// let age = 23;
// let question2 = `how old is ${name} ${surname}?`;
// let answer = "He is "+age+" years old";
// console.log(question2);
// console.log(answer);


//Artithmetic operations
//sum, Rest, Mul, Div
// let operator_a = 12;
// let operator_b = 6;
// console.log("Suma "+ (operator_a + operator_b));
// console.log("Resta "+ (operator_a - operator_b));
// console.log("Producto "+ (operator_a * operator_b));
// console.log("Division "+ (operator_a / operator_b));

//Assignament Operators
// let x = 5;
// let y = 6;
// console.log(x+=5);
// console.log(y-=5);

//typeof, null and undefined
// let testNumber = 12;
// console.log(typeof(testNumber));
// let testUndefined;
// console.log(testUndefined);

//Array definition
// let first_array = [];
// let second_array = new Array(3);
// let third_array = new Array(3,5);
// let fourth_array = new Array(3,5,"seville",true,third_array);
// console.log(first_array);
// console.log(second_array);
// console.log(third_array);
// console.log(fourth_array);
// for(let i= 0;i<fourth_array.length;i++){
//     console.log("Entramos en la iteracion de "+fourth_array[i]);
// }
// let i=fourth_array.length;
// for(;i>=0;i--){
//     console.log("Entramos en la segunda iteracion de "+fourth_array[i]);
// }
// ForEach
// fourth_array.forEach(function(element){
//     console.log("Cuarta interacion "+element);
// })

// 'use strict'
// let text = "hello";
// init();
// function init(){
    
//     if(true){
            
//     }
//     console.log(text);
// }
// If /else/elfeif
// var dni_regex = /^(\d{8})([A-Z])$/;
// let dni = "12345678K";
// if(dni.match(dni_regex)){
//     console.log("Correct DNI");
// }else{
//     console.log("Incorrect DNI");
// }
//Comparando operadores
// console.log(8==8);
// console.log(8=="8");
// console.log(8===8);
// console.log(8==="8");
// console.log(5>8);
// console.log(5<8);
// console.log(5>=8);
// console.log(5<=8);
// console.log("test"=="test");
// console.log("test"==="test");
// console.log("test"=="Test");


//bucle while
// var i = 1;
// while(i < 10){
//     console.log("The number is "+ i);
//     i++;
// }

//date object
// let today = new Date();
// let first_october = new Date(2019,09 ,1);
// // console.log(today);
// // console.log(first_october);
// // console.log(today.getDay());
// if(today>first_october){
//     console.log("Today is after to first october");
// }else{
//     console.log("Today is before to first october");
// }


//Events JS
// function myFirstFunction(){
//     console.log("Thanks you for your click");
// }
// function mySecondFunction(){
//     console.log("Thank you for your interest");
// }

//Select DOM
//var div = document.getElementById("my_div");
// var div = document.getElementsByTagName("div");
// //div.classList.add("my_class");
// console.log(div);
// var second_div = document.querySelector("#my_second_div");
// console.log(second_div);
// function $(selector){
//     return document.querySelectorAll(selector);
// }
// console.log($("#my_third_div"));

//create DOM Nodes
$("#btn").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]")
    $("#form").appendChild(input);
});
function $(selector){
    return document.querySelector(selector);
}
