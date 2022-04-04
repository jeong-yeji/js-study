const radius = document.getElementById('radius');
const round = document.getElementById('round');
const area = document.getElementById('area');
const start = document.getElementById('start');

start.addEventListener('click', function () {
    round.value = radius.value * 2 * Math.PI;
    area.value = radius.value * radius.value * Math.PI;
});
