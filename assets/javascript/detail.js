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

// const tlsprice = priceTarget.toLocaleString('vi-VN');
// price.innerText=tlsprice;
// const tlsprice2 = priceTarget2.toLocaleString('vi-VN');
// price2.innerText=tlsprice2;
// const tlsprice3 = priceTarget3.toLocaleString('vi-VN');
// price3.innerText=tlsprice3;

// animateCounter('target', 500);
// animateCounter('target2', 500);
// animateCounter('target3', 500);

plus.addEventListener("mouseover", plusMouseOver);
plus.addEventListener("click", function() {
    plusQuantity();
    animateCounter('target', 500);
    animateCounter('target2', 500);
    animateCounter('target3', 500);
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
        animateCounter('target', 500);
        animateCounter('target2', 500);
        animateCounter('target3', 500);
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
}


// function animateCounter(target, duration) {
//     const element = document.getElementById(target);
//     const finalValue = element.innerHTML;
//     const increment = finalValue / (duration / 10); // Update every 10ms
//     let currentValue = 0;

//     const interval = setInterval(() => {
//         currentValue += increment;
//         if (currentValue >= finalValue) {
//             currentValue = finalValue; // Ensure it stops at 1000
//             clearInterval(interval);
//         }
//         element.textContent = Math.round(currentValue).toLocaleString('vi-VN');
//     }, 10);
// }


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
