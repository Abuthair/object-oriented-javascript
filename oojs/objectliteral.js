var employee = {
  firstname: "abuthair",
  lastname: "sheik",
  Age: 23,
  hobbies: ["sports", "music"],
  address: {
    city: "Chennai",
    state: "TamilNadu",
  },
  mobile: 6382038310,
};
console.log(employee);
console.log(employee.firstname);
console.log(employee.address.state);

for (const key in employee) {
  var prop = employee[key];
  //if key is array
  if (Array.isArray(prop)) {
    for (const index in prop) console.log(key, prop[index]);
  }
  if (typeof prop == "object") {
    for (const value in prop) console.log(key, prop[value]);
  } else console.log(key, prop);
}
