const menu = document.getElementById("menu");
const dot = document.getElementsByClassName("dot_item");

dot[1].addEventListener("click", ()=> {
    menu.style.transform="translateX(-113px)";
    dot[1].classList.add("dot_active");
    dot[0].classList.remove("dot_active");
});
dot[0].addEventListener("click", ()=> {
    menu.style.transform="translateX(0px)";
    dot[0].classList.add("dot_active");
    dot[1].classList.remove("dot_active");
})
