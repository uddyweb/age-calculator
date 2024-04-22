//INPUTS
const dayCount = document.getElementById('Day');
const monthCount = document.getElementById('Month');
const yearCount = document.getElementById('Year');

//OUTPUTS
const dayOut = document.getElementById('days');
const monthOut = document.getElementById('months');
const yearOut = document.getElementById('years');

//FORM ELEMENT
const form = document.querySelector('form');

//SUBMIT EVENTLISTENER
form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31,30,31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement
        if(!i.value){
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = "this field is required";
            validator = false;
        } else if (monthCount.value > 12){
            monthCount.style.borderColor = 'red';
            monthCount.querySelector('small').innerText = "must be a valid month";
            validator = false;
        } else if (dayCount.value > 31){
            dayCount.style.borderColor = 'red';
            dayCount.querySelector('small').innerText = "must be a valid day";
            validator = false;
        }else if(yearCount.value > 2025){
            yearCount.style.borderColor = 'red';
            yearCount.querySelector('small').innerText = "Can't go that far into the future";
            validator = false;
        }
        else{
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = "";
            validator = true;
        };
    }
    )
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if(validate ()){
        if ( dayCount.value > day){
            day = day + months[month - 1];
            month = month - 1;
        } if (monthCount.value > month){
            month = month + 12;
            year = year - 1;
        }
        const d = day - dayCount.value;
        const m = month - monthCount.value;
        const y = year - yearCount.value;

        dayOut.innerHTML = d;
        monthOut.innerHTML = m;
        yearOut.innerHTML = y;
    }
}