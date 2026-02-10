//Ques1. Remove all negative numbers from an array.
// let arr =[5,-3,16,-11,-7,8]
// result : [5,16,8]

let arr =[5,-3,16,-11,-7,8] 
let res = []
while (arr.length>0){
    let val = arr.shift();
    if (val>0){
        res.push(val);
    }
}
console.log(res);



//Ques2.Check if array is palindrome or not.

function palindrome(){
let arr = [1,2,3,2,1]
let original = [];                             //1,2,3,2,1
let reverse=[]                                 //1,2,3,2,1

//Copy all the elements of given array to an original array

for(let i=0;i<arr.length;i++){
    original.push(arr[i]);
    console.log(original);
}

//Reverse the given array

while(arr.length>0){
    reverse.push(arr.pop())
}
for(i=0;i<original.length;i++){
    if(original[i] !== reverse[i]){
        return"Not a palindrome"
    }
}
        return"Not a palindrome";
}
console.log(palindrome());