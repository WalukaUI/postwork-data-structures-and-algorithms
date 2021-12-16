function fibonacci(n) {
  // type your code here
  if (n < 2) return n;

  // var a = 0;
  // var b = 1;
  // var result;

  // for (let i = 1; i < n; i++) {
  //   result = a + b;
  //   a = b;
  //   b = result;
  // }
  // return result;

  return fibonacci(n - 1) + fibonacci(n - 2);
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
