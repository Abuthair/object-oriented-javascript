function add(num1, num2) {
  console.log(num1 + num2);
}
num1 = 10;
num2 = 20;
add(num1, num2);

sum(2, 3);
//function declaration
function sum(x, y) {
  console.log(x + y);
}
//anonymous function - function expression
var total = function (x, y) {
  console.log(x + y);
};
total(25, 25);

function check() {
  console.log("checking....");
}
function check(name) {
  console.log(`checking ${name}`);
}
check();

//function as parameter
var greet = function () {
  console.log("have a great day");
};
var showMessage = function (func) {
  func();
};
showMessage(greet);

//create a function as sayHello taking uname as parameter
//print hello uname
var sayHello = function (uname) {
  console.log(`Hello ${uname}`);
};
//create another function printMessage that takes func as parameter
var printMessage = function (x, uname) {
  x(uname);
};
printMessage(sayHello, "Abu");
//

var calculate = function (x, y, z) {
  return x + y + z;
};
var printAverage = function (func, a, b, c) {
  let sum = func(a, b, c);
  console.log(sum / 3);
};
printAverage(calculate, 10, 20, 30);
///lambda
var show = (uname) => {
  console.log(`Have a great day $(uname)`);
};
show("abuthair");
