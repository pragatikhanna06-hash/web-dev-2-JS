document.getElementById("btn").addEventListener("click", () => {
    const subHead = document.createElement("h2").textContent = "New Sub Heading"

    const image = document.createElement("img")
    image.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.kyCAdjYq2EoUR3nSFG0ggAHaE5?rs=1&pid=ImgDetMain&o=7&rm=3")

    image.setAttribute("alt", "K.R.Mangalam");

    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
})