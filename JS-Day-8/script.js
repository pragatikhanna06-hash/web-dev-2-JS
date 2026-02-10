//DOM TRAVERSAL
//1. getElementById
const heading=document.getElementById("myheading");
console.log(heading);
heading.style.color="tomato"
heading.style.backgroundColor="yellow"
heading.textContent="Hello Student!";

//2. getElementByClassName
const subHeading=document.getElementsByClassName("sub-heading")
console.log(subHeading)
for (let i=0;i<subHeading.length;i++){
    subHeading[1].style.color="cyan"
}
//3.QUERY SELECTOR
const content=document.querySelector("#content p")
console.log(content);
content.style.fontsize="40px"