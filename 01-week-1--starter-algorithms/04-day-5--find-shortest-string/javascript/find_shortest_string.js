function findShortestString(arr) {
  // type your code here
  let hh=[]
 for(let str of arr){
   let ans=str.split('')

    hh.push(ans.length)
 }
 let aaa=Math.min(...hh)
 let bbb=hh.indexOf(aaa)
  return arr[bbb]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
