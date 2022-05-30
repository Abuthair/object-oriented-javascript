// create an employee array
const employees = [
  {
    name: "Abuthair",
    department: {
      depname: "Mechanical",
      dephead: "Odhja",
    },
    skills: ["java", " spring"],
    city: "Chennai",
  },
  {
    name: "Awadhesh",
    department: {
      depname: "ECE",
      dephead: "Madhu",
    },
    skills: ["Angular", "Sql"],
    city: "Bangalore",
  },
  {
    name: "Baba",
    department: {
      depname: "It",
      dephead: "Akash",
    },
    skills: ["spring", "Nodejs"],
    city: "Hyderabad",
  },
];
// name, department->deptname,depthead,skills=[java, spring],city
for (const i in employees) {
  var employee = employees[i];
  for (const key in employee) {
    var prop = employee[key];
    if (Array.isArray(prop)) for (const val of prop) console.log(key, prop);
    else if (typeof prop == "object")
      for (const i in prop) console.log(i, prop[i]);
    else console.log(key, prop);
  }
}
