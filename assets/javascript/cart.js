const labelContract = document.getElementById("label_contract-accepted");
const inputContract = document.getElementById("contract-accept");
let checkbokContractFlag = false;

inputContract.addEventListener("click", function() {
    if(checkbokContractFlag==false){
        labelContract.classList.add("active");
        checkbokContractFlag=true;
    }
    else if(checkbokContractFlag==true){
        labelContract.classList.remove("active");
        checkbokContractFlag=false; 
    }
})