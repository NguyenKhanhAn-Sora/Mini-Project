const warning = document.getElementsByClassName('warning')[0];
const inputForm = document.getElementById('username');
const loginModal = document.getElementsByClassName('login_modal')[0];
const closeModal = document.getElementById("close_modal");

inputForm.addEventListener('blur', function() {
    if(inputForm.value.trim() === "") {
        warning.innerHTML="The field Phone number/Email is required.";
        warning.style.display = "block";
    } 
    else {
        warning.style.display="none";
    }
})

//Hàm kiểm tra email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Hàm kiểm tra số điện thoại hợp lệ
function isValidPhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10,11}$/; // Số điện thoại gồm 10-11 chữ số
    return phoneRegex.test(phone);
}

const button=document.getElementsByClassName('btn_continue')[0];
let LoginSuccess = false;
button.addEventListener("click", function(event) {
    event.preventDefault(); 
    if(inputForm.value.trim() === "") {
        event.preventDefault();
        return false;
    }
    else if(!isValidEmail(inputForm.value.trim()) && !isValidPhoneNumber(inputForm.value.trim())){
        warning.innerHTML="Please enter the correct format of email or phone number";
        warning.style.display="block";
        event.preventDefault();
        return false
    }
    else {
        loginModal.style.display = "none";
        window.alert("Đăng nhập thành công");
        LoginSuccess = true;
        return true;
    }
})

closeModal.addEventListener("click", function() {
    loginModal.style.display="none";
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


// ----------------------- Special Dot ----------------------

const specialList = document.getElementById("special_content-list");
const specialDot = document.getElementsByClassName("special_dot-item");


for(let i=0;i<specialDot.length;i++) {
    specialDot[i].addEventListener("click", function() {
        specialList.style.transform=`translateX(${-375 * i}px)`;
        for(let k=0;k<specialDot.length;k++){
            if(specialDot[k].classList.contains("special_dot-active")){
                specialDot[k].classList.remove("special_dot-active");
            }
        }
        specialDot[i].classList.add("special_dot-active");
    })
}

// ---------------- Login_Modal ---------------------

const headerInfoUser = document.getElementsByClassName("header_info-user--item");

const userInfoMenu = document.getElementsByClassName("menu_info-user")[0];
let userInfoMenuFlag = false;

for(let i=0;i<headerInfoUser.length;i++) {
    headerInfoUser[i].addEventListener("click", function(event) {
        if(LoginSuccess==false) {
            if(i==3) {
                event.preventDefault();
            }
            loginModal.style.display="block";
        }
        
        else if(i==0) {
            locateModal.style.display="block";
        }
        else if(i==1 && userInfoMenuFlag==false) {
            userInfoMenu.style.display="block";
            userInfoMenuFlag=true;
            userInfoMenu.focus();
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

// ---------------------Advers Modal ----------------
const advers = document.getElementsByClassName("advers_modal")[0];
const buttonCloseAdvers = document.getElementsByClassName("btn_advers-close")[0];

buttonCloseAdvers.addEventListener("click", function() {
    advers.style.display = "none";
})

// -------------- Button Locate User Trans -----------------

const btnDefaultLocate = document.getElementsByClassName("btn_default-locate")[0];
const btnDefaultTrans = document.getElementsByClassName("btn_default-trans")[0];

let btnDefaultTransFlag = false;

btnDefaultLocate.addEventListener("click", function() {
    if(btnDefaultTransFlag==false) {
        btnDefaultTrans.style.transform = "translateX(18px)";
        btnDefaultLocate.style.backgroundColor = "#ff5b6a";
        btnDefaultTrans.style.border = "1px solid #ff5b6a";
        btnDefaultTransFlag=true;
    }
    else{
        btnDefaultTrans.style.transform = "translateX(0px)";
        btnDefaultLocate.style.backgroundColor = "#b4b4b4";
        btnDefaultTrans.style.border="1px solid #b4b4b4"
        btnDefaultTransFlag=false;
    }
})




const closeLocateModal = document.getElementsByClassName("btn_close-locate")[0];
const locateModal = document.getElementsByClassName("user_info-locate")[0   ];

closeLocateModal.addEventListener("click", function() {
    locateModal.style.display="none";
})