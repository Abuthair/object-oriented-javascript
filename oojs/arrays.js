var names = ["Abuthair", "Awadhesh", "Odhja"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
//for in
for (const i in names) {
  console.log(names[i]);
}
//for of
for (const value of names) {
  console.log(value);
}
// names.foreach(function (value, i, arrName) {
//   console.log(value + "\t" + i + "\t" + arrName[i]);
// });
// //using lambda expression
names.foreach((value, i, arr) => {
  console.log(value);
});
