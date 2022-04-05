const sUnit = document.getElementById('s-unit');
const tUnit = document.getElementById('t-unit');
let cToF = true;
const sValue = document.getElementById('s-value');
const tValue = document.getElementById('t-value');

function changeUnit() {
    sValue.value = '';
    tValue.value = '';
    if (cToF) {
        sUnit.innerHTML = '&#8457';
        tUnit.innerHTML = '&#8451';
    } else {
        sUnit.innerHTML = '&#8451';
        tUnit.innerHTML = '&#8457';
    }
    cToF = !cToF;
}

function convert() {
    if (cToF) {
        tValue.value = (sValue.value * 1.8 + 32).toFixed(2);
    } else {
        tValue.value = ((sValue.value - 32) / 1.8).toFixed(2);
    }
}
