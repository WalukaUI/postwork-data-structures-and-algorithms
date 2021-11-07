function findFirstDuplicate(arr) {
// -------1st methord------------------------------------

  // if (arr.length <= 1) {
  //   return -1;
  // } else {
  //   for (let i = 0; i <= arr.length; i++) {
  //     for (let x = 1; x <= arr.length; x++) {
  //       if (arr[i] === arr[i + 1]) {
  //         return arr[i];
  //       }
  //     }
  //   }
  // }

  // -----------2nd methord--------------------------------

  // var uniques = ""

  // for (const value of arr) {
  //   if (uniques===value) {
  //     return value;
  //   }

  //   uniques=value;
  // }
  // return -1;

  // ----------3rd methord---------------------------------

  const uniques = new Set();

  for (const value of arr) {
    if (uniques.has(value)) {
      return value;
    }

    uniques.add(value);
  }

  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//check the length of array
// if array.length = 0 or 1 return -1 else 
//find any duplicates if there is not any return -1
//if there is a duplicate return first duplicate value
