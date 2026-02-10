// let user={
//     fullName:"Pragati",
//     address:{
//         city:"Gurugram",
//         state:"Haryana"
//     },
//     mobileno:9876543210,
//     favcolor:["black","white","blue"],
//     demo:function(){
//         return "demo function";
//     }
// }
// console.log(user.fullName,user.mobileno,user.favcolor[1],user.demo(),user.address.city);


const car = {
    brand:"Mahindra",
    model:"Thar"
};
// We can't add a new key and value pair but we can change or update excisting values.
Object.seal(car);

//We can't add a new key and value pair also can't change or update excisting values.
Object.freeze(car);

car.model="XUV700";
car.color="black";
console.log(car);