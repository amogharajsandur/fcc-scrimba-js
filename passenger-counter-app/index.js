let value = 0;

let count = document.getElementById("count");
let saved = document.getElementById("saved");

let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let saveBtn = document.getElementById("save");

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
saveBtn.addEventListener("click", save(value));

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
    console.log(count.innerText);
}

function save(value) {
    saved.innerText += `- ${value}`;
}

console.log(count.innerText);