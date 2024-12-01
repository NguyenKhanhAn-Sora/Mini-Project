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
        return true;
    }
})

closeModal.addEventListener("click", function() {
    loginModal.style.display="none";
})
    
