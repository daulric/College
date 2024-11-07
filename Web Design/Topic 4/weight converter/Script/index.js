const input_el = document.getElementById("input");
const err_el = document.getElementById("error");
const result_el = document.getElementById("result");

let errTime;
let resultTime;

function updateResults() {
    if (input_el.value <= 0 || isNaN(input_el.value)) {
        console.log("idk ere");
        err_el.innerText = "Please enter a valid number";
        clearTimeout(errTime);
        errTime = setTimeout(() => {
            err_el.innerText = "";
            input_el.value = "";
        }, 2000);
    } else {
        result_el.innerText = (+input_el.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            err_el.innerText = "";
            input_el.value = "";
        }, 10000)
    }
}

input_el.addEventListener('input', updateResults);