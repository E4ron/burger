let burger = document.querySelector(".burger");
let menu = document.querySelector("nav > ul");
if (burger) {
    burger.onclick = () => {
         burger.classList.toggle(".open")
    }
}