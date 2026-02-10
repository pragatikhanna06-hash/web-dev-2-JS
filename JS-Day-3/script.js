//push(element): Adds an element to the end of the array and returns the new length of the array.

let fruits = ["apple","banana"];
let newLength = fruits.push("cherry");
console.log(newLength);



//pop(): Removes the last element from the array and returns that element.

 let fruit = ["apple", "banana", "cherry"];
 let removed = fruit.pop();
 console.log(removed);
 console.log(fruit);



 //Ques1. Reverse the array using push and pop method.

// let arr1 =[1,2,3,4,5];
// let reverse =[];
// while(arr1.length > 0){
//     reverse.push(arr1.pop())
// }
// console.log(reverse); 



//Ques2. Remove all negative numbers from an array.
// let arr =[5,-3,16,-11,-7,8];
// result : [5,16,8]

let arr = [5, -3, 16, -11, -7, 8];
let result = [];
let i = 0;
while (i < arr.length) {
  if (arr[i] >= 0) {
    result.push(arr[i]);
  }
  i++;
}
console.log(result);