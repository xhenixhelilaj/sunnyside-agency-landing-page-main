const hamburger = document.querySelector(".hamburger-icon")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", toggle)

function toggle(){
    menu.classList.toggle("toggle")

}