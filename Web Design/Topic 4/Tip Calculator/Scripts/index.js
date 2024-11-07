const total_text = document.getElementById("total");
const button = document.getElementById("calculate");

// items here;
const tip_amount = document.getElementById("tip");
const bill_amount = document.getElementById("bill");

function GetTotalWithPercentage(total, percent) {
    total_text.innerText = (total * ( 1 + percent / 100  )).toFixed(2);
}

button.addEventListener("click", () => {
    if (!bill_amount.value || !tip_amount.value) return;
    GetTotalWithPercentage(bill_amount.value, tip_amount.value);
});
