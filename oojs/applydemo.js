//create a user constructor - name,department
//create a Employee name

var User = function (name, department) {
  (this.name = name), (this.department = department);
};
var Employee = function (name) {
  this.name = name;
};
var user = new User("Abuthair", "Mechanical");
var employee = new Employee("Awadhesh");

console.log(user.name);
console.log(user.department);
console.log(employee.name);

var greet = function (message) {
  console.log(`${message} ${this.name}`);
};

//greet.call(object,the data needed by greet function)
//pass arguments as array
greet.apply(user, ["Hello"]);
greet.apply(employee, ["have a great day"]);

var checkName = function () {
  var uname = this.name;
  if (this.name.startsWith("A")) {
    console.log("hello", uname);
  } else console.log("your name is invalid", uname);
};
checkName.apply(user);
checkName.apply(employee);

var show = function (amount, bonus, message) {
  console.log(`${message} ${this.name}`);
  console.log(`Your final amount is ,${amount + bonus}`);
};
show.apply(user, [9000, 2000, "great day"]);
show.apply(employee, [90000, 20000, "your Increment Details"]);
