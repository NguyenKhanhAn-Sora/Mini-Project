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

// ----------------- DOM Product ---------------------

let product = [
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/c/h/chickenset_fried_1_.png.webp",
        name: "Chicken Set",
        foodName: ["02 Fried Chicken", "01 French Fries"],
        newPrice: "87.000",
        oldPrice: "114.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/c/h/chickenset_h_s_1_.png.webp",
        name: "HS Chicken Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "95.000",
        oldPrice: "124.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/c/o/combo_update_shrimp_2.jpg.webp",
        name: "Shrimp Combo",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "82.000",
        oldPrice: "91.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/c/o/combo_update_bulgogi_1.jpg.webp",
        name: "Bulgogi Combo",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "82.000",
        oldPrice: "91.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_loy_set_2_.png.webp",
        name: "Loy Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "145.000",
        oldPrice: "177.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_lody_set_4.png.webp",
        name: "Lody Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "145.000",
        oldPrice: "169.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_lony_set_3_1_.png.webp",
        name: "Lony Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "195.000",
        oldPrice: "237.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_loking_set_2_.png.webp",
        name: "Loking Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "220.000",
        oldPrice: "273.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_l4_set_3_1_.png.webp",
        name: "L4 Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "280.000",
        oldPrice: "337.000"
    },
    {
        img: "https://www.lotteria.vn/media/catalog/product/cache/400x400/p/a/pack_lony_set_3_1_.png.webp",
        name: "HS Chicken Set",
        foodName: ["02 HS Chicken", "01 French Fries"],
        newPrice: "95.000",
        oldPrice: "124.000"
    },
];

// -------------------------------------------------

const content = document.getElementById("content"); //Content

const cartMenu = document.createElement('div'); //Cart_menu
cartMenu.className = "cart_menu";
content.appendChild(cartMenu);

const cart = document.createElement("div"); //Cart
cart.className="cart";
cartMenu.appendChild(cart);

const cartList = document.createElement('ul');  //Cart List
cartList.className="cart_list";
cart.appendChild(cartList);


function showProduct() {
    for(let i=0;i<product.length;i++) {
        const cartListItem = document.createElement('li');  //Cart List Item
        cartListItem.className = "cart_list-item";
        cartList.appendChild(cartListItem);
    
        const cartListItemLink = document.createElement('a'); //Thẻ a trong item
        cartListItem.appendChild(cartListItemLink);
        cartListItemLink.href = ""
    
        const itemImage = document.createElement('img');    //Image
        cartListItemLink.appendChild(itemImage);
        itemImage.src=product[i].img;
    
        const itemContent = document.createElement('div');  //Item Content
        itemContent.className="item_content";
        cartListItemLink.appendChild(itemContent);
    
        // ---------------------------------------
    
        const title = document.createElement('span'); //Title
        title.className="title";
        itemContent.appendChild(title);
    
        const titleName = document.createElement('span');
        title.appendChild(titleName);
        title.innerHTML=product[i].name;
    
        const titleHeartIcon = document.createElement('div');
        titleHeartIcon.className="heart_icon";
        title.appendChild(titleHeartIcon);

        const heartButton1 = document.createElement('button');
        heartButton1.id = "heart1";
        heartButton1.className="btn_heart"
        titleHeartIcon.appendChild(heartButton1);

        const heartButton2 = document.createElement('button');
        heartButton2.id = "heart2";
        heartButton2.className="btn_heart"
        titleHeartIcon.appendChild(heartButton2);

        const heartButton3 = document.createElement('button');
        heartButton3.id = "heart3";
        heartButton3.className="btn_heart"
        titleHeartIcon.appendChild(heartButton3);

        let heartFlag = false;

        heartButton1.addEventListener("click", function(event) {
            event.preventDefault();
            
            if(heartFlag==false) {
                heartButton1.style.backgroundImage=`url("https://www.lotteria.vn/grs-static/images/icon-save-active.svg")`;
                heartFlag=true;
                heartButton1.classList.add("active");
                heartButton2.classList.add("activefly1")
                heartButton3.classList.add("activefly2")
            }
            else{
                heartButton1.style.backgroundImage=`url("	https://www.lotteria.vn/grs-static/images/icon-save.svg")`;
                heartFlag=false;
                heartButton1.classList.remove("active");
                heartButton2.classList.remove("activefly1");
                heartButton3.classList.remove("activefly2");
            }
        })
    
        
    
    
        // ------------------------------------------
    
        const food = document.createElement('div'); //Food
        food.className="food";
        itemContent.appendChild(food);
    
        const foodContent = document.createElement('p');
        food.appendChild(foodContent);
        foodContent.innerHTML=`${product[i].foodName[0]} <br> ${product[i].foodName[1]}`

    
        // ----------------------------------------
    
    
        const oder = document.createElement('div'); //Oder
        oder.className="oder";
        itemContent.appendChild(oder);
    
        const cost = document.createElement('div');
        cost.className="cost";
        oder.appendChild(cost);
    
        const newPrice = document.createElement('p');
        newPrice.className="new_price";
        cost.appendChild(newPrice);
        newPrice.innerHTML=`${product[i].newPrice} ₫`;
    
        const oldPrice = document.createElement('p');
        oldPrice.className='old_price';
        cost.appendChild(oldPrice);

        const oldPriceContent = document.createElement('span');
        oldPrice.appendChild(oldPriceContent);
        oldPriceContent.innerHTML=`${product[i].oldPrice} ₫`;

        // oldPrice.innerHTML=product[i].oldPrice;
    
    
    
    
        const plus = document.createElement('div');
        plus.className="plus";
        oder.appendChild(plus);
    
        const icon = document.createElement('i');
        icon.className="fa-solid fa-plus";
        plus.appendChild(icon);

        
    }
    
}

showProduct();


// ---------------- CSS -----------------------

const style = document.createElement('style');
style.innerHTML = `
    .cart_menu {
    margin-top: 45px;
}

.cart {

}


.special_content {
    
}

.cart_list {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 25px;
}

.cart_list-item {
    border-radius: 10px;
    box-shadow: 0px 2px 10px -3px rgba(0,0,0,0.3);
    overflow: hidden    ;
    padding: 12px 12px 0px;
}

.cart_list-item a {
    text-decoration: none;
}

.cart_list-item a img {
    width: calc(100% + 24px);
    margin-left: -12px;
    margin-top: -12px;
}

.item_content {
    margin: 15px 0px;
}

.item_content .title {
    font-size: 18px;
    color: #142f43;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    margin-right: -12px;
    align-items: center;
    align-content: center;
}

.item_content .title button {
    background-image: url("	https://www.lotteria.vn/grs-static/images/icon-save.svg");
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    width: 27px;
    height: 23px;
    margin-right: 12px;
    /* background-position: -5px 0px; */
}

.item_content .food p{
    color: #6e7e8a;
    font-size: 14px;
    margin-top: 15px;
    line-height: 1.4;
}

.oder {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}

.cost p:first-child {
    font-size: 25px;
    color: #ff5b6a;
    margin-bottom: 3px;
    font-weight: 600;
}

.cost p:last-child {
    background-image: url("https://www.lotteria.vn/grs-static/images/icon-discount.svg");
    background-repeat: no-repeat;
    background-size:auto;
    /* background-position: 0px -3.5px; */
    width: 100px;
    height: 23px;
    line-height: 1.5;
    /* text-align: left; */
}

.cost p:last-child span {
    color: #6b6c6c;
    font-size: 16px;
    margin-left: 25px;
    text-decoration: line-through;
}

.oder .plus {
    width: 45px;
    height: 45px;
    background-color: #FF5B6A;
    border-radius: 5px;
    text-align: center;
    align-content: center;
}

.oder i {
    font-size: 17px;
    color: #fff;

}
`

// document.body.appendChild(style);



// -------------------- menu  Item Link ----------------------


const menuItemLink = document.getElementsByClassName('menu_item-link');
const menuItemImg = document.getElementsByClassName('menu_item-img');
const menuItemName = document.getElementsByClassName('menu_item-name');

for(let i=0;i<menuItemLink.length;i++) {
    menuItemLink[i].addEventListener("click", function(event) {
        event.preventDefault();
        for(let k=0;k<menuItemLink.length; k++) {
            menuItemLink[k].classList.remove("active");
        }
        menuItemLink[i].classList.add("active");
        if(i>=8) {
            menu.style.transform="translateX(-113px)";
            dot[1].classList.add("dot_active");
            dot[0].classList.remove("dot_active");
        }
        else if(i<=2){
            menu.style.transform="translateX(0px)";
        dot[0].classList.add("dot_active");
        dot[1].classList.remove("dot_active");
        }
})
}



// ------------------------ Heart -----------------------


// ----------------------------- Header ------------------

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