const checks = document.querySelectorAll('.checkbx');
const total = document.getElementById('total');
let sum = 24000;
total.value = `${sum}원`;

for (const check of checks) {
    check.addEventListener('click', function () {
        if (this.checked) {
            sum += parseInt(this.value);
        } else {
            sum -= parseInt(this.value);
        }
        total.value = `${sum}원`;
    });
}
