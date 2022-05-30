//syntax is ... followed by the variable

function calculate(...nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  console.log(sum);
}

calculate(10, 20, 30);
calculate(10, 20, 30, 40);

function checkName(...names) {
  names.forEach((name) => {
    if (name.toUpperCase().startsWith("P")) console.log(name);
  });
}

checkName("Priya", "Paul", "Raju", "Sri");
