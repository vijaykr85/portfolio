// console.log("Hello World");
// document.write("this is document write")
// console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);


//  Data types in javaScript
// Numbers 
// var num1 = 455;
// var num2 = 56.76;

// String
// var str1 = "This is a string";
// var str2 = "this is also a string";

// objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     vijay: 99.97
// }
// console.log(marks);

// Booleans 
// var a = true;
// var b = false;
// console.log(a,b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
//  console.log(n);

/*
At a very high level, there are two types of data types in javaScript
1. Primitive data types: undefined, null , number, String,bollean,symbol
2. Reference data types: Arrays and objects
*/

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

// operators in javaScript
// Arithmetic operators
// var a = 100;
// var b = 10;

// console.log("the value of a + b is ",a + b);
// console.log("the value of a - b is ",a - b );
// console.log("the value of a * b is ",a * b);
// console.log("the value of a / b is ",a / b);

// Assignment operators 
// var c = b;
// // c += 2;
// c -= 2; // c = c -2;
// c *= 2;
// c /= 2;
// console.log(c);

//comparison operator
// var x = 34;
// var y = 56;
//  console.log(x == y);
//  console.log(x >= y);
//  console.log(x <= y);
//  console.log(x > y);
//  console.log(x < y);

// logical and
/*
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
*/

// logical or
/*
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
*/
// logical not
// console.log(!false);
// console.log(!true);

// function avg (a , b){
//     c = (a + b)/2;
//     return c;
// }

// c1 = avg(4,6);
// c2 = avg(14,16);
// console.log(c1, c2);

// conditionals in javaScript 

/*
var age = 41;

age = 31;
if(age > 18){
    console.log('you can drink');
}
else{
    console.log('you cannot drink ');
}

// if-else Ladder
if(age > 32){
    console.log("you are not a kid");
}
if(age > 26){
    console.log("bache nhi rahe");
}
if(age > 22){
    console.log("yes bache nahi rahe");
}
if(age > 18){
    console.log("18 bache nhi rahe");
}
else{
    console.log("Bachhe rahe");
}
console.log("end of ladder");
*/

// var arr = [1, 2, 3, 4, 5, 6, 7];
// //  console.log(arr);
//  for(var i=0;i<arr.length;i++){
//      if(i==2){
//         //  break;
//         continue;
//      }
//      console.log(arr[i])
//  }

//  arr.forEach(function(element){
//     console.log(element);
//  })

// let j = 0;
//  while(j<arr.length){
//      console.log(arr[j]);
//      j++;
//  }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// let myArr = ["Fan","Camera",34,null,true];// mistake
// // Array Methods
// console.log(myArr.length);
// myArr.pop();

//String Methods in javaScript
let myLovelyString = "Vijay is a good boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))

// console.log(myLovelyString.slice(1,3))
// d = myLovelyString.replace("good", "bad");
// d = d.replace("good","bad");
// console.log(d, myLovelyString)


// myDate = new Date();
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());


// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is created paragraph";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is created bold";
// tn[0].replaceChild(createdElement2, createdElement);

//Selecting using query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectorAll('.container')
// console.log(sel)

// function clicked(){
    // console.log('The button was clicked')
// }
// window.onload = function(){
//     console.log('The document was loaded')
// }

//Events in javaScript
// firstContainer.addEvenListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log("Clicked on container")
// })

// firstContainer.addEvenListener('mouseover', function(){
//     console.log("mouse on container")
// })

// firstContainer.addEvenListener('mouseout', function(){
//     console.log("mouse out container")
// })

// firstContainer.addEvenListener('mouseup', function(){
//     console.log("mouse up when clicked on container")
// })

// firstContainer.addEvenListener('mousedown', function(){
//     console.log("mouse down when clicked on container")
// })

//Arrow Functions
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}
logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b>"
    // console.log("I am your log")
}
//SetTimeout and setinterval
setTimeout(logkaro,5000);
// clr = setInterval(logkaro,2000);


//javaScript localStorage
// localStorage.setItem('name','vijay')
// localStorage
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

// //json
// obj = {name: "vijay",length: 1}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse('{"name": "vijay","length":1,"a":{"this": "that"}}')
// console.log(parsed);

 //Template literals - Backticks
 a = 34;
 console.log('this is my ${a}')
