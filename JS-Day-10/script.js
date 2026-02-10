// function handleClick(){
//     const button = document.getElementById("btn");
//     button.textContent = "Clicked"
// }

// function handleClick(){
//     const heading = document.getElementById("heading");
//     heading.textContent = "Clicked"
// heading.style.color = "red"}




// (Wrong):-
// function handleClick(){
// const head = document.createElement("h2").text = "this is h2 tag of the webpage.".append("content")
//    const heads = document.querySelector("h2");
     
//      const button = document.getElementById("btn");
//     button.textContent = "Clicked"
// }

function handleClick(){
    const subHead = document.createElement("h2").textContent="New Sub Heading"

    const image=document.createElement("img")
    image.setAttribute("src","https://images.shiksha.com/mediadata/images/1548929576phptr7bk8.jpeg")

    image.setAttribute("alt","K.R.Mangalam");

    document.getElementById("content").append(subHead)
    document.getElementById("content").append("img")
}