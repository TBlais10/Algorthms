//challenge 16
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

// function chunkArrayInGroups(arr, size) {
//   //this function will read size and count upto that and put that many numbers into a new array
//   let newGroup = []
//   let test = []


//   for (let i in arr) {

//     //console.log(`This is line ${i} and has the character of ${arr[i]}`)
//     //breaking down how the for in loop works
//     if (test.length === size) {
//       //this if statement say once text is exactly the value of size, do this.

//       newGroup.push(test)
//       // console.log(newGroup)
//       test = [] //this resets test once it finishes checking the if
//       //console.log(test)
//     }

//     test.push(arr[i])// pushes arr items into test
//     //console.log(test)

//   }
//   newGroup.push(test) //pushes the remaining items into the array
//   //console.log(newGroup)
//   return newGroup
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))
// //console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))