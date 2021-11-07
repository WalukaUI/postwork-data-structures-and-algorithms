function reverseString(str) {

  let string=[]
  for(let i = str.length-1; i >=0;i--){
    string.push(str[i])
  }
 let revisedStr=string.join('')
 return revisedStr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

//split the word 
//push it to an array
//revrese array
//join as a string and retrn
