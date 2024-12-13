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


// ---------------------- Header -----------------

const loginModal = document.getElementsByClassName('login_modal')[0];
const closeModal = document.getElementById("close_modal");

const headerInfoUser = document.getElementsByClassName("header_info-user--item");

const userInfoMenu = document.getElementsByClassName("menu_info-user")[0];
let userInfoMenuFlag = false;

let LoginSuccess =true;

const loginModalContainer = document.getElementById('login_modal-container');

for(let i=0;i<headerInfoUser.length;i++) {
    headerInfoUser[i].addEventListener("click", function(event) {
        if(LoginSuccess==false) {
            if(i==3) {
                event.preventDefault();
            }
            loginModal.style.display="flex";
        }
        
        else if(i==0) {
            locateModal.style.display="flex";
        }
        else if(i==1 && userInfoMenuFlag==false) {
            userInfoMenu.style.display="block";
            userInfoMenuFlag=true;
            // userInfoMenu.focus();
        }
        else if(i==1 && userInfoMenuFlag==true) {
            userInfoMenu.style.display="none";
            userInfoMenuFlag=false;
        }
    })
}

userInfoMenu.addEventListener("blur", function() {
    userInfoMenu.style.display="none";
})



const closeLocateModal = document.getElementsByClassName("btn_close-locate")[0];
const locateModal = document.getElementsByClassName("user_info-locate")[0];

closeLocateModal.addEventListener("click", function() {
    locateModal.style.display="none";
})