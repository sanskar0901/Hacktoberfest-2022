var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);

var numArr = new Float64Array([140000, 104, 99]);
numArray = numArray.sort();
console.log(numArray)

let city = ["California", "Barcelona", "Paris", "Kathmandu"];

let sortedArray = city.sort();
console.log(sortedArray);
