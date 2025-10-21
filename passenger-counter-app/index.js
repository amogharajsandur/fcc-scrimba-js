let value = 0;

let count = document.getElementById("count");
let body = document.getElementById("body");
let saved = document.getElementById("saved");

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let saveBtn = document.getElementById("save");
let resetCountBtn = document.getElementById("reset");
let resetSavedBtn = document.getElementById("reset-saved");

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
saveBtn.addEventListener("click", save);
resetCountBtn.addEventListener("click", resetCount);
resetSavedBtn.addEventListener("click", resetSaved);

function increase() {
    value += 1;
    updater(value);
}

function decrease() {
    value -= 1;
    updater(value);
}

function updater(value) {
    count.innerText = value;
    // console.log(count.innerText);
}

let savedValues = [];

function save() {
    // if (savedValues) {
        savedValues += `${value}, `
        saved.innerText = savedValues;
    // } else {
    //     alert("Nothing to save.")
    // }
}

function resetCount() {
    value = 0;
    updater(value);
}

function resetSaved() {
    savedValues = [];
    saved.innerText = savedValues;
}

// console.log(count.innerText);