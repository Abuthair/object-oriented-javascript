//create an array of mobile objects
var mobiles = [
  {
    model: "A123",
    brand: "samsung",
    price: 20000,
  },
  {
    model: "13",
    brand: "Apple",
    price: 21000,
  },
  {
    model: "x12",
    brand: "Nokia",
    price: 8000,
  },
];
var laptops = [
  { model: "T2055", brand: "Dell", price: 200000 },
  { model: "s2234", brand: "Lenova", price: 500000 },
  { model: "1243ee", brand: "Apple", price: 2000000 },
];
function details(amount) {
  console.log(`Model ${this.model}`);
  console.log(`Price ${this.price}`);
  console.log(`Brand ${this.brand}`);
  console.log(`Discounted price  ${this.price - amount}`);
}
// mobiles.forEach((mobile) => {
//   for (const key in mobile) {
//     var prop = mobile[key];
//     console.log(key, prop);
//   }
// });
mobiles.forEach((mobile) => {
  details.call(mobile, 10000);
});
laptops.forEach((laptop) => {
  details.apply(laptop, [2000]);
});
