//create a class in js
function Student(name, city) {
  this.name = name;
  this.city = city;
  this.greet = function () {
    console.log(`welcome ${this.name} from ${this.city}`);
  };
}
//create an object
var student = new Student("abuthair", "chennai");
console.log(student.name);
console.log(student.city);
console.log(student.mobile);
student.greet();

Student.prototype.mobile = 393999485;
Student.prototype.check = function (message) {
  console.log(message, `${this.name}`);
};

var student1 = new Student("Awadhesh", "bangalore");
console.log(student1.name);
student1.mobile = 930393409;
console.log(student1.city);
student1.greet();
student1.check("great day");
