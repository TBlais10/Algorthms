function nextInLine(arr, item) {
    // Only change code below this line
    arr.push (item);
    return arr.shift();
    // Only change code above this line
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  /* nextInLine([], 5) should return a number.

nextInLine([], 1) should return 1

nextInLine([2], 1) should return 2

nextInLine([5,6,7,8,9], 1) should return 5

After nextInLine(testArr, 10), testArr[4] should be 10*/