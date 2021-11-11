function fibonacci(num) {
  // type your code here

  if (num < 1) return 0;

  var a, b, result;
  a = 0;
  b = 1;
  result = b;
  for (let i = 1; i < num; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
