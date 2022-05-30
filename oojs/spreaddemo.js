var gnames = ["Tia", "Ovi"];
var bnames = ["Hemant", "Reyansh"];

//using spread
//spread is used to spread the array into individual values
//use ... before the array/object name

//using ... in front of array means it is spread operator
//using ... in front of values means it is rest parameter
var names = [...gnames, ...bnames];
names.forEach((value) => console.log(value));
findVowels("j", "a", "v", "a", "s", "c", "r", "i", "p", "t");
function findVowels(...vowels) {
  var counter = 0;
  vowels.forEach((letter) => {
    if (
      letter.toUpperCase() == "A" ||
      letter.toUpperCase() == "E" ||
      letter.toUpperCase() == "I" ||
      letter.toUpperCase() == "O" ||
      letter.toUpperCase() == "U"
    ) {
      console.log(letter);
      counter += 1;
    }
  });
  console.log("Number of vowels = " + counter);
}
//create 2 objects -
//employee -name , salary
//address - city  state
//using spread --> create a new object
//empdetails -> that has all the four

var employee = {
  name: "abuthair",
  salary: 3000,
};
var address = {
  city: "chennai",
  state: "TamilNadu",
};

var empdetails = { ...employee, ...address };
console.log(empdetails);
