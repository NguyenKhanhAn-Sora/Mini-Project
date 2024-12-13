const subtract = document.getElementById("subtract");
const plus = document.getElementById("plus");
const value = document.getElementById("value");
let quantity = parseInt(value.innerText);

let price = document.getElementById("target");
const priceTarget = parseInt(price.innerText);
let price2 = document.getElementById("target2");
const priceTarget2 = parseInt(price2.innerText);
let price3 = document.getElementById("target3");
const priceTarget3 = parseInt(price3.innerText);

let oldValue = priceTarget;
let newValue=0;


plus.addEventListener("mouseover", plusMouseOver);
plus.addEventListener("click", function() {
    plusQuantity();
});


subtract.addEventListener("mouseover", subtractMouseOver);
subtract.addEventListener("click", function(event) {
    if(quantity > 1) {

        quantity--;
        let target = priceTarget;
        target=target*quantity;
        price.innerText=target;
        value.innerText=quantity;
        let target2 = priceTarget2;
        target2=target2*quantity;
        price2.innerText=target2;
        let target3 = priceTarget3;
        target3=target3*quantity;
        price3.innerText=target3;
        // transToViNumber(target,target2,target3);
        animateCounter(1500);
        
    }
});

function plusMouseOver() {
    plus.style.cursor="pointer";
}

function subtractMouseOver() {
    if(quantity > 1) {
        subtract.style.cursor="pointer";
    }
    else{
        subtract.style.cursor="default";
    }
}

function plusQuantity() {
    quantity++;
    value.innerText= `${quantity}`;
    let target = priceTarget;
    target=target*quantity;
    price.innerText=target;
    let target2 = priceTarget2;
    target2=target2*quantity;
    price2.innerText=target2;
    let target3 = priceTarget3;
    target3=target3*quantity;
    price3.innerText=target3;
    // transToViNumber(target, target2, target3);
    animateCounter(1500);
}

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

// -------------------- Count Number ----------------

const elementList = document.getElementsByClassName('number_count');

function animateCounter(duration) {
    for (let i = 0; i < elementList.length; i++) {
        const finalValue = parseInt(elementList[i].innerHTML); // Chuyển thành số
        const increment = finalValue / (duration / 20); // Cập nhật mỗi 20ms
        let currentValue = 0;

        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue; // Dừng tại giá trị cuối cùng
                clearInterval(interval);
            }
            // Cập nhật giá trị hiển thị
            elementList[i].innerHTML = Math.round(currentValue).toLocaleString('vi-VN');
        }, 10);
    }
}

animateCounter(1500); 


// ----------------- Header ---------------------

const loginModal = document.getElementsByClassName('login_modal')[0];
const closeModal = document.getElementById("close_modal");

const headerInfoUser = document.getElementsByClassName("header_info-user--item");

const userInfoMenu = document.getElementsByClassName("menu_info-user")[0];
let userInfoMenuFlag = false;

const loginModalContainer = document.getElementById('login_modal-container');

let LoginSuccess =true;

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



const closeLocateModal = document.getElementsByClassName("btn_close-locate")[0];
const locateModal = document.getElementsByClassName("user_info-locate")[0];

closeLocateModal.addEventListener("click", function() {
    locateModal.style.display="none";
})