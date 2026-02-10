// // Task-1
// const heading = document.getElementById("profile");
// console.log(heading);
// heading.style.backgroundColor="#f5f5f5";
// heading.style.padding="15px";
// heading.style.textAlign="center";

// // Task-2
// const ant=document.getElementsByClassName("important");
// console.log(ant);
// for(let i=0;i<ant.length;i++){
//     ant[i].style.color="red";
//     ant[i].style.fontSize="40px";
// }
// console.log(ant.length)

// Task-3
const paragraph=document.getElementsByTagName("p");
console.log(paragraph);
for(let i=0;i<paragraph.length;i++){
    if (i%2===0){
        paragraph[i].style.color="blue"
    }
    else{
        paragraph[i].style.color="green"
    }
    paragraph[paragraph.length-1].style.fontWeight="bold"
    
}


// innerText
// innerHTML
//textContent 


// const paragraph=document.getElementsByTagName("paragraph");              (Correct hai )
// console.log(paragraph);
// paragraph.forEach((paragraph,index)=>{
//     if (index%2===0){
//          paragraph.style.color="blue"
//      }
//      else{
//          paragraph.style.color="green"
//     }
// });



const demo = document.getElementById("demo")

// create a new element and append
const newpara = document.createElement("p");
newpara.textContent="this is a dynamically created paragraph.";
console.log(newpara)

document.getElementById("content").append(newpara);



