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


// ------------------------ Lang_Drop-Active--------------

const langContainer = document.getElementsByClassName("header_info-language")[0];
const langDrop = document.getElementsByClassName("lang_drop")[0];

langContainer.addEventListener("click", function() {
    if(langContainer.classList.contains("lang_drop-active")){
        langContainer.classList.remove("lang_drop-active");
        langDrop.style.display="none";
    }
    else{
        langContainer.classList.add("lang_drop-active");
        langDrop.style.display="block";
    }
});


// ------------------Dowload_Drop-active-----------------

const dowloadContainer = document.getElementsByClassName("dowload_container")[0];
const dowloadDrop = document.getElementsByClassName("dowload_drop")[0];

dowloadContainer.addEventListener("click", function() {
    if(dowloadContainer.classList.contains("dowload_drop-active")){
        dowloadContainer.classList.remove("dowload_drop-active");
        dowloadDrop.style.display="none";
    }
    else{
        dowloadContainer.classList.add("dowload_drop-active");
        dowloadDrop.style.display="block";
    }
})
