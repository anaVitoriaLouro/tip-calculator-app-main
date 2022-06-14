const bill = document.getElementById("inp-bill");
const tip_options = document.querySelectorAll(".tip-options");
const tipCustom = document.getElementById("inp-custom-tip");
const people = document.getElementById("inp-people");
const errorMsg = document.querySelector(".error-msg")
const total = document.querySelectorAll(".value");
const reset_button = document.querySelector(".reset-button");

let billValue = 0.0; //default value
let tipValue = 0.15; //default value
let peopleValue = 1;


bill.addEventListener('input', setBillValue);
tip_options.forEach(tip_button => {
    tip_button.addEventListener('click', (activeTipOption));
});
tipCustom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);
reset_button.addEventListener('click', reset);


function validateFloat(s){
    var rgx  = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}


function setBillValue(){
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }

    if(!validateFloat(bill.value)){
        bill.value = bill.value.substring(0, bill.value.lenght-1);
    }

    billValue = parseFloat(bill.value);

    calculateTip();
}


function activeTipOption(event) {
    tip_options.forEach(tip_button => {
        tip_button.classList.remove("active");
    

    if(event.target.innerHTML == tip_button.innerHTML) {
        tip_button.classList.add("active");
        tipValue = parseFloat(tip_button.innerHTML)/100;
    };
});

//clear custom tip
tipCustom.value = '';

calculateTip();
}

function setTipCustomValue(){
    if(!validateInt(tipCustom.value)){
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.lenght-1);
    }

    tipValue = parseFloat(tipCustom.value/100);

    tip_options.forEach(tip_button => {
        tip_button.classList.remove("active");
});