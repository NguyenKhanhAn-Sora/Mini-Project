const labelContract = document.getElementsByClassName("label_contract-accepted")[0];
const inputContract = document.getElementById("contract-accept");
let checkbokContractFlag = true;
const contractWarn = document.getElementById("contract-warn");

inputContract.addEventListener("click", function() {
    if(checkbokContractFlag==false){
        labelContract.classList.add("active");
        checkbokContractFlag=true;
        contractWarn.style.display="none"
    }
    else if(checkbokContractFlag==true){
        labelContract.classList.remove("active");
        checkbokContractFlag=false; 
        contractWarn.style.display="block"
    }
})

const btnDefaultLocate = document.getElementsByClassName("btn_default-locate");
const btnDefaultTrans = document.getElementsByClassName("btn_default-trans");

for(let i=0;i<btnDefaultLocate.length;i++) {
    let btnDefaultTransFlag = false;

    btnDefaultLocate[i].addEventListener("click", function() {
        if(btnDefaultTransFlag==false) {
            btnDefaultTrans[i].style.transform = "translateX(18px)";
            btnDefaultLocate[i].style.backgroundColor = "#ff5b6a";
            btnDefaultTrans[i].style.border = "1px solid #ff5b6a";
            btnDefaultTransFlag=true;
        }
        else{
            btnDefaultTrans[i].style.transform = "translateX(0px)";
            btnDefaultLocate[i].style.backgroundColor = "#b4b4b4";
            btnDefaultTrans[i].style.border="1px solid #b4b4b4"
            btnDefaultTransFlag=false;
        }
    })
}
