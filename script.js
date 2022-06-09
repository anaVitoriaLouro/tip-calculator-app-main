const bill = document.getElementById(".inp-bill");
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
tipCustom.addEventListener('input', setTip´CustomValue);
people.addEventListener('input', setPeopleValue);
reset_button.addEventListener('click', reset);

function activeTipOption(event) {
    tip_options.forEach(tip_button => {
        tip_button.classList.remove("active")
    });

    if(event.target.classList.contains("tip-options")) {
        event.target.classList.add("active");
    } else {
        event.target.parentElement.classList.add("active");
    }
}