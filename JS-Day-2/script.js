// let numbers = [1,2,3];
// let doubled = numbers.map(x=>x*2);
// console.log(doubled);



//Filter method

// let marks = [7,23,34,11,15,,29,16,37,4,0];
// let result = marks.filter((mark)=>mark>=16);
// console.log(result);


//Ques1. Take an array with 10 different marks. And print all the marks and message of pass and fail.
//example: 30 "pass", 12 "fail"

// let marks = [7,23,34,11,15,,29,16,37,4,0];
// let result = marks.filter((mark)=>{
//     if (mark>=16){
//         console.log(mark,"pass");
//     }
//     else{
//         console.log(mark,"fail");
//     }
// });



//Ques2. Find out the sum of all the elements inside an array using for loop

//Map method

// let arr = [1,2,3,4,5];
// let sum=0;
// for (let i = 0; i < arr.length; i++); {
//     sum += arr[i];
// }
// console.log(sum);



//Reduce method

// let arr = [1,2,3,4,5];
// let res = arr.reduce((acc,current)=>acc+current)
// console.log(res)